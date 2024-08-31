import { UserDocument, UserModel, UserProps } from "../models";
import { ApiErrorCode } from "../api-error-code.enum";
import { SecurityUtils } from "../utils";
import { Types } from "mongoose";

export class UserService {
  private static instance: UserService;

  private constructor() {}

  public static getInstance(): UserService {
    if (UserService.instance === undefined) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async createUser(create: UserCreate): Promise<UserDocument | ApiErrorCode> {
    try {
      const exist = await UserModel.findOne({ address: create.address });
      if (exist) {
        return ApiErrorCode.alreadyExists;
      }
      const model = new UserModel(create);
      const user = await model.save();
      return user;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async deleteUser(id: string): Promise<ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const user = await UserModel.findByIdAndDelete(id);
    if (user === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const user = await UserModel.findById(id);
    if (user === null) {
      return null;
    }
    return user;
  }

  async getAllUsers(): Promise<UserDocument[] | null> {
    const users = await UserModel.find();
    return users;
  }

  async updateUser(
    id: string,
    update: UserUpdate
  ): Promise<UserDocument | ApiErrorCode> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return ApiErrorCode.invalidParameters;
      }
      const user = await UserModel.findByIdAndUpdate(id, update, {
        returnDocument: "after",
      });
      if (user === null) {
        return ApiErrorCode.notFound;
      }
      return user;
    } catch (error) {
      return ApiErrorCode.failed;
    }
  }
}

export interface UserCreate {
  readonly address: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly banned: boolean;
  readonly like: string[];
  readonly follow: string[];
  readonly subscription: string;
  readonly role: string[];
}

export interface UserUpdate {
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly banned?: boolean;
  readonly like?: string[];
  readonly follow?: string[];
  readonly subscription?: string;
  readonly role?: string[];
}
