import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface TitleProps {
  _id: string;
  address: string;
  name: string;
  tokenID: number;
}

export type TitleDocument = TitleProps & Document;

const titleSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      required: true,
    },
    name: {
      type: Schema.Types.String,
    },
    tokenId: {
      type: Schema.Types.Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TitleModel = mongoose.model<TitleDocument>("Title", titleSchema);
