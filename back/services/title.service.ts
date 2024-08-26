import {TitleDocument, TitleModel} from "../models";
import {FilterQuery, Types} from "mongoose";
import {ApiErrorCode} from "../api-error-code.enum";

export class TitleService {
    // Singleton
    private static instance: TitleService;

    private constructor() {
    }

    public static getInstance(): TitleService {
        if (TitleService.instance === undefined) {
            TitleService.instance = new TitleService();
        }
        return TitleService.instance;
    }

    async createTitle(create: TitleCreate): Promise<TitleDocument | ApiErrorCode> {
        try {
            const model = new TitleModel(create);
            const title = await model.save();
            return title;
        } catch (err) {
            return ApiErrorCode.invalidParameters;
        }
    }

    async deleteTitle(id: string): Promise<ApiErrorCode> {
        if (!Types.ObjectId.isValid(id)) {
            return ApiErrorCode.invalidParameters;
        }
        const title = await TitleModel.findByIdAndDelete(id);
        if (title === null) {
            return ApiErrorCode.notFound;
        }
        return ApiErrorCode.success;
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

    async getAllTitles(): Promise<TitleDocument[] | null> {
        const titles = await TitleModel.find();
        return titles;
    }
}

export interface TitleCreate {
    readonly address: string;
    readonly name: string;
    readonly tokenId: number;
}
