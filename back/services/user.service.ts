import { UserDocument, UserModel, UserProps } from "../models";
import { ApiErrorCode } from "../api-error-code.enum";
import { Types, FilterQuery } from "mongoose";

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
  async searchUsers(
    search: UserSearch
  ): Promise<UserDocument[] | ApiErrorCode> {
    const filter: FilterQuery<UserDocument> = {};

    if (search.address !== undefined) {
      filter.address = { $regex: search.address, $options: "i" };
    }
    if (search.firstname !== undefined) {
      filter.firstname = { $regex: search.firstname, $options: "i" };
    }
    if (search.lastname !== undefined) {
      filter.lastname = { $regex: search.lastname, $options: "i" };
    }
    if (search.email !== undefined) {
      filter.email = { $regex: search.email, $options: "i" };
    }
    if (search.subscription !== undefined) {
      filter.subscription = { $regex: search.subscription, $options: "i" };
    }
    if (search.role !== undefined) {
      filter.role = { $regex: search.role, $options: "i" };
    }
    if (search.banned !== undefined) {
      filter.banned = search.banned;
    }

    const query = UserModel.find(filter);

    if (search.limit !== undefined) {
      query.limit(search.limit);
    }
    if (search.offset !== undefined) {
      query.skip(search.offset);
    }

    return query.exec();
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
  readonly role: string;
}
export interface UserSearch {
  readonly address?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly banned?: boolean;
  readonly subscription?: string;
  readonly role?: string;
  readonly limit?: number;
  readonly offset?: number;
}

export interface UserUpdate {
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly banned?: boolean;
  readonly like?: string[];
  readonly follow?: string[];
  readonly subscription?: string;
  readonly role?: string;
}
