import * as mongoose from "mongoose";
import {Schema, Document} from 'mongoose';

export interface PromoProps {
    _id: string;
    code: string;
    percent: number;
}

export type PromoDocument = PromoProps & Document;

const PromoSchema = new Schema({
    code: {
        type: Schema.Types.String,
        required: true
    },
    percent: {
        type: Schema.Types.Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export const PromoModel = mongoose.model<PromoDocument>('Promo', PromoSchema);
