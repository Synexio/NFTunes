import { ArtistDocument, ArtistModel } from "../models";
import { FilterQuery, Types } from "mongoose";
import { ApiErrorCode } from "../api-error-code.enum";

export class ArtistService {
  private static instance: ArtistService;

  private constructor() {}

  public static getInstance(): ArtistService {
    if (ArtistService.instance === undefined) {
      ArtistService.instance = new ArtistService();
    }
    return ArtistService.instance;
  }
  async createArtist(
    create: ArtistCreate
  ): Promise<ArtistDocument | ApiErrorCode> {
    try {
      const model = new ArtistModel(create);
      const artist = await model.save();
      return artist;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async getArtistById(id: string): Promise<ArtistDocument | ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const artist = await ArtistModel.findById(id);
    if (artist === null) {
      return ApiErrorCode.notFound;
    }
    return artist;
  }

  //   async searchPromo(
  //     search: PromoSearch
  //   ): Promise<ArtistDocument[] | ApiErrorCode> {
  //     const filter: FilterQuery<ArtistDocument> = {};
  //     if (search.code !== undefined) {
  //       filter.code = {
  //         $regex: search.code,
  //         $options: "i", // case insensitive
  //       };
  //     }

  //     if (search.percent !== undefined) {
  //       filter.percent = {
  //         $gte: search.percent,
  //       };
  //     }

  //     const query = ArtistModel.find(filter);
  //     if (search.limit !== undefined) {
  //       query.limit(search.limit);
  //     }

  //     if (search.offset !== undefined) {
  //       query.skip(search.offset);
  //     }
  //     return query.exec();
  //   }

  //   async getPromoByCode(code: string): Promise<ArtistDocument | ApiErrorCode> {
  //     if (typeof code !== "string") {
  //       return ApiErrorCode.invalidParameters;
  //     }
  //     const promo = await ArtistModel.findOne({
  //       code: code,
  //     });
  //     if (promo === null) {
  //       return ApiErrorCode.notFound;
  //     }
  //     console.log(promo.percent);
  //     return promo.percent;
  //   }

  //   async deletePromo(id: string): Promise<ApiErrorCode> {
  //     if (!Types.ObjectId.isValid(id)) {
  //       return ApiErrorCode.invalidParameters;
  //     }
  //     const artist = await ArtistModel.findByIdAndDelete(id);
  //     if (artist === null) {
  //       return ApiErrorCode.notFound;
  //     }
  //     return ApiErrorCode.success;
  //   }

  //   async updatePromo(
  //     id: string,
  //     update: PromoUpdate
  //   ): Promise<ArtistDocument | ApiErrorCode> {
  //     if (!Types.ObjectId.isValid(id)) {
  //       return ApiErrorCode.invalidParameters;
  //     }
  //     const promo = await ArtistModel.findByIdAndUpdate(id, update, {
  //       returnDocument: "after",
  //     });
  //     if (promo === null) {
  //       return ApiErrorCode.notFound;
  //     }
  //     return promo;
  //   }
}

export interface ArtistCreate {
  readonly address: string;
  readonly claimCount: number;
  readonly status: string;
  readonly currentReward: string;
  readonly album: string[];
}

export interface PromoSearch {
  readonly code?: string;
  readonly percent?: number;
  readonly limit?: number;
  readonly offset?: number;
}

export interface PromoUpdate {
  readonly code?: string;
  readonly percent?: number;
}
