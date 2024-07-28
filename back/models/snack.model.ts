import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface SnackProps {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export type SnackDocument = SnackProps & Document;

const SnackSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export const SnackModel = mongoose.model<SnackDocument>("Snack", SnackSchema);
