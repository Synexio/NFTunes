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
      const exist = await ArtistModel.findOne({ address: create.address });
      if (exist) {
        return ApiErrorCode.alreadyExists;
      }
      const model = new ArtistModel(create);
      const artist = await model.save();
      return artist;
    } catch (err) {
      return ApiErrorCode.invalidParameters;
    }
  }

  async deleteArtist(id: string): Promise<ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const artist = await ArtistModel.findByIdAndDelete(id);
    if (artist === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
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

  async getAllArtists(): Promise<ArtistDocument[] | null> {
    const artists = await ArtistModel.find();
    return artists;
  }
  async searchArtist(
    search: ArtistSearch
  ): Promise<ArtistDocument[] | ApiErrorCode> {
    const filter: FilterQuery<ArtistDocument> = {};

    if (search.address !== undefined) {
      filter.address = { $regex: search.address, $options: "i" };
    }
    if (search.status !== undefined) {
      filter.status = { $regex: search.status, $options: "i" };
    }
    if (search.currentReward !== undefined) {
      filter.currentReward = { $regex: search.currentReward, $options: "i" }; // This was previously incorrect
    }

    const query = ArtistModel.find(filter);

    if (search.limit !== undefined) {
      query.limit(search.limit);
    }
    if (search.offset !== undefined) {
      query.skip(search.offset);
    }

    return query.exec();
  }
}
export interface ArtistCreate {
  readonly address: string;
  readonly claimCount: number;
  readonly status: string;
  readonly currentReward: string;
  readonly album: string[];
}

export interface ArtistSearch {
  readonly address?: string;
  readonly status?: string;
  readonly currentReward?: string;
  readonly limit?: number;
  readonly offset?: number;
}
