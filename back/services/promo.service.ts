import {PromoDocument, PromoModel} from "../models";
import {FilterQuery, Types} from "mongoose";
import {ApiErrorCode} from "../api-error-code.enum";


export class PromoService {

  private static instance: PromoService;

  private constructor() {
  }

  public static getInstance(): PromoService {
    if (PromoService.instance === undefined) {
      PromoService.instance = new PromoService();
    }
    return PromoService.instance;
  }

  async getPromoById(id: string): Promise<PromoDocument | ApiErrorCode> {
    if(!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const promo = await PromoModel.findById(id);
    if(promo === null) {
      return ApiErrorCode.notFound;
    }
    return promo;
  }


  async searchPromo(search: PromoSearch): Promise<PromoDocument[] | ApiErrorCode> {
    const filter: FilterQuery<PromoDocument> = {};
    if (search.code !== undefined) {
      filter.code = {
        $regex: search.code,
        $options: "i"  // case insensitive
      };
    }

    if(search.percent !== undefined) {
      filter.percent = {
        $gte: search.percent
      };
    }

    const query = PromoModel.find(filter);
    if(search.limit !== undefined) {
      query.limit(search.limit);
    }

    if(search.offset !== undefined) {
      query.skip(search.offset);
    }
    return query.exec();
  }

  async getPromoByCode(code: string): Promise<PromoDocument | ApiErrorCode> {
    if (typeof code !== "string") {
      return ApiErrorCode.invalidParameters;
    }
    const promo = await PromoModel.findOne({
      code: code,
    });
    if (promo === null) {
      return ApiErrorCode.notFound;
    }
    console.log(promo.percent);
    return promo.percent;
  }

  async createPromo(create: PromoCreate): Promise<PromoDocument | ApiErrorCode> {
    try {
      const model = new PromoModel(create);
      const promo = await model.save();
      return promo;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async deletePromo(id: string): Promise<ApiErrorCode> {
    if(!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const promo = await PromoModel.findByIdAndDelete(id);
    if(promo === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
  }

  async updatePromo(id:string, update: PromoUpdate): Promise<PromoDocument | ApiErrorCode> {
    if(!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const promo = await PromoModel.findByIdAndUpdate(id, update, {
      returnDocument: "after"
    });
    if(promo === null) {
      return ApiErrorCode.notFound;
    }
    return promo;
  }
}

export interface PromoCreate {
  readonly code: string;
  readonly percent: number;

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