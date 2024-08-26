import { AlbumDocument, AlbumModel } from "../models";
import { FilterQuery, Types } from "mongoose";
import { ApiErrorCode } from "../api-error-code.enum";

export class AlbumService {
  // Singleton
  private static instance: AlbumService;
  private constructor() {}
  public static getInstance(): AlbumService {
    if (AlbumService.instance === undefined) {
      AlbumService.instance = new AlbumService();
    }
    return AlbumService.instance;
  }

  async getAlbumById(id: string): Promise<AlbumDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const album = await AlbumModel.findById(id);
    if (album === null) {
      return null;
    }
    return album;
  }

  // async searchSnacks(
  //   search: SnackSearch
  // ): Promise<AlbumDocument[] | ApiErrorCode> {
  //   const filter: FilterQuery<AlbumDocument> = {};
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

  //   const query = AlbumModel.find(filter);
  //   if (search.limit !== undefined) {
  //     query.limit(search.limit);
  //   }

  //   if (search.offset !== undefined) {
  //     query.skip(search.offset);
  //   }
  //   return query.exec();
  // }

  async createAlbum(
    create: AlbumCreate
  ): Promise<AlbumDocument | ApiErrorCode> {
    try {
      const model = new AlbumModel(create);
      const album = await model.save();
      return album;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async deleteAlbum(id: string): Promise<ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const album = await AlbumModel.findByIdAndDelete(id);
    if (album === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
  }

  // async updateSnack(
  //   id: string,
  //   update: SnackUpdate
  // ): Promise<AlbumDocument | ApiErrorCode> {
  //   if (!Types.ObjectId.isValid(id)) {
  //     return ApiErrorCode.invalidParameters;
  //   }
  //   const Snack = await AlbumModel.findByIdAndUpdate(id, update, {
  //     returnDocument: "after",
  //   });
  //   if (Snack === null) {
  //     return ApiErrorCode.notFound;
  //   }
  //   return Snack;
  // }
}

export interface SnackSearch {
  readonly name?: string;
  readonly price?: number;
  readonly limit?: number;
  readonly offset?: number;
}

export interface AlbumCreate {
  readonly address: string;
  readonly titles: string[];
  readonly name: string;
}

export interface SnackUpdate {
  readonly name?: string;
  readonly price?: number;
}
