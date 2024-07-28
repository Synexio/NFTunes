import { SnackDocument, SnackModel } from "../models";
import { FilterQuery, Types } from "mongoose";
import { ApiErrorCode } from "../api-error-code.enum";

export class SnackService {
  // Singleton
  private static instance: SnackService;
  private constructor() {}
  public static getInstance(): SnackService {
    if (SnackService.instance === undefined) {
      SnackService.instance = new SnackService();
    }
    return SnackService.instance;
  }

  async getSnackById(id: string): Promise<SnackDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const Snack = await SnackModel.findById(id);
    if (Snack === null) {
      return null;
    }
    return Snack;
  }

  async searchSnacks(
    search: SnackSearch
  ): Promise<SnackDocument[] | ApiErrorCode> {
    const filter: FilterQuery<SnackDocument> = {};
    if (search.name !== undefined) {
      filter.name = {
        $regex: search.name,
        $options: "i", // case insensitive
      };
    }

    if (search.price !== undefined) {
      filter.price = {
        $gte: search.price,
      };
    }

    const query = SnackModel.find(filter);
    if (search.limit !== undefined) {
      query.limit(search.limit);
    }

    if (search.offset !== undefined) {
      query.skip(search.offset);
    }
    return query.exec();
  }

  async createSnack(
    create: SnackCreate
  ): Promise<SnackDocument | ApiErrorCode> {
    try {
      const model = new SnackModel(create);
      const Snack = await model.save();
      return Snack;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async deleteSnack(id: string): Promise<ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const Snack = await SnackModel.findByIdAndDelete(id);
    if (Snack === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
  }

  async updateSnack(
    id: string,
    update: SnackUpdate
  ): Promise<SnackDocument | ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const Snack = await SnackModel.findByIdAndUpdate(id, update, {
      returnDocument: "after",
    });
    if (Snack === null) {
      return ApiErrorCode.notFound;
    }
    return Snack;
  }
}

export interface SnackSearch {
  readonly name?: string;
  readonly price?: number;
  readonly limit?: number;
  readonly offset?: number;
}

export interface SnackCreate {
  readonly name: string;
  readonly price: number;
}

export interface SnackUpdate {
  readonly name?: string;
  readonly price?: number;
}
