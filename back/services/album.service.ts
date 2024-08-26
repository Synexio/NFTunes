import {AlbumDocument, AlbumModel, TitleDocument, TitleModel, TitleProps} from "../models";
import {FilterQuery, Types} from "mongoose";
import {ApiErrorCode} from "../api-error-code.enum";

export class AlbumService {
    // Singleton
    private static instance: AlbumService;

    private constructor() {
    }

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

    async createAlbum(create: AlbumCreate): Promise<AlbumDocument | ApiErrorCode> {
        try {
            const model = new AlbumModel(create);
            const album = await model.save();
            return album;
        } catch (err) {
            console.log('error', err);
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

    async getAllAlbums(): Promise<AlbumDocument[] | null> {
        const albums = await AlbumModel.find();
        return albums;
    }
}

export interface AlbumCreate {
    readonly address: string;
    readonly titles: string[];
    readonly name: string;
}
