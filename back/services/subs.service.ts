import {SubsDocument, SubsModel} from "../models";
import {FilterQuery, Types} from "mongoose";
import {ApiErrorCode} from "../api-error-code.enum";

export class SubsService {
    // Singleton
    private static instance: SubsService;

    private constructor() {
    }

    public static getInstance(): SubsService {
        if (SubsService.instance === undefined) {
            SubsService.instance = new SubsService();
        }
        return SubsService.instance;
    }

    async createSubs(create: SubsCreate): Promise<SubsDocument | ApiErrorCode> {
        try {
            const model = new SubsModel(create);
            const subs = await model.save();
            return subs;
        } catch (err) {
            return ApiErrorCode.invalidParameters;
        }
    }

    async deleteSubs(id: string): Promise<ApiErrorCode> {
        if (!Types.ObjectId.isValid(id)) {
            return ApiErrorCode.invalidParameters;
        }
        const subs = await SubsModel.findByIdAndDelete(id);
        if (subs === null) {
            return ApiErrorCode.notFound;
        }
        return ApiErrorCode.success;
    }

    async getSubsById(id: string): Promise<SubsDocument | null> {
        if (!Types.ObjectId.isValid(id)) {
            return null;
        }
        const subs = await SubsModel.findById(id);
        if (subs === null) {
            return null;
        }
        return subs;
    }

    async getAllSubs(): Promise<SubsDocument[] | null> {
        const subs = await SubsModel.find();
        return subs;
    }
}

export interface SubsCreate {
    readonly startDate: Date;
    readonly lastPayment: Date;
    readonly status: string;
}
