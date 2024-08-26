import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface SubsProps {
    _id: string;
    startDate: Date;
    lastPayment: Date;
    status: string;
}

export type SubsDocument = SubsProps & Document;

const subsSchema = new Schema(
    {
        startDate: {
            type: Schema.Types.Date,
            required: true,
        },
        lastPayment: {
            type: Schema.Types.Date,
            required: true,
        },
        status: {
            type: Schema.Types.String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const SubsModel = mongoose.model<SubsDocument>("Subs", subsSchema);
