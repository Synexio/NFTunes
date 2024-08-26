import { TitleDocument, TitleModel } from "../models";
import { FilterQuery, Types } from "mongoose";
import { ApiErrorCode } from "../api-error-code.enum";

export class TitleService {
  // Singleton
  private static instance: TitleService;
  private constructor() {}
  public static getInstance(): TitleService {
    if (TitleService.instance === undefined) {
      TitleService.instance = new TitleService();
    }
    return TitleService.instance;
  }

  async createTitle(
    create: TitleCreate
  ): Promise<TitleDocument | ApiErrorCode> {
    try {
      const model = new TitleModel(create);
      const title = await model.save();
      return title;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async getTitleById(id: string): Promise<TitleDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const title = await TitleModel.findById(id);
    if (title === null) {
      return null;
    }
    return title;
  }

  // async searchDrinks(
  //   search: DrinkSearch
  // ): Promise<TitleDocument[] | ApiErrorCode> {
  //   const filter: FilterQuery<TitleDocument> = {};
  //   if (search.name !== undefined) {
  //     filter.name = {
  //       $regex: search.name,
  //       $options: "i", // case insensitive
  //     };
  //   }

  //   if (search.price !== undefined) {
  //     filter.price = {
  //       $gte: search.price,
  //     };
  //   }

  //   const query = TitleModel.find(filter);
  //   if (search.limit !== undefined) {
  //     query.limit(search.limit);
  //   }

  //   if (search.offset !== undefined) {
  //     query.skip(search.offset);
  //   }
  //   return query.exec();
  // }

  // async deleteDrink(id: string): Promise<ApiErrorCode> {
  //   if (!Types.ObjectId.isValid(id)) {
  //     return ApiErrorCode.invalidParameters;
  //   }
  //   const title = await TitleModel.findByIdAndDelete(id);
  //   if (title === null) {
  //     return ApiErrorCode.notFound;
  //   }
  //   return ApiErrorCode.success;
  // }

  // async updateDrink(
  //   id: string,
  //   update: DrinkUpdate
  // ): Promise<TitleDocument | ApiErrorCode> {
  //   if (!Types.ObjectId.isValid(id)) {
  //     return ApiErrorCode.invalidParameters;
  //   }
  //   const drink = await TitleModel.findByIdAndUpdate(id, update, {
  //     returnDocument: "after",
  //   });
  //   if (drink === null) {
  //     return ApiErrorCode.notFound;
  //   }
  //   return drink;
  // }
}

export interface TitleCreate {
  readonly address: string;
  readonly name: string;
  readonly tokenId: number;
}

export interface DrinkSearch {
  readonly name?: string;
  readonly price?: number;
  readonly limit?: number;
  readonly offset?: number;
}

export interface DrinkUpdate {
  readonly name?: string;
  readonly price?: number;
  readonly quantity?: number;
}
