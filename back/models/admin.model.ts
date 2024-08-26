import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface AdminProps {
  _id: string;
  address: string;
  firstname: string;
  lastname: string;
  email: string;
}

export type AdminDocument = AdminProps & Document;

const adminSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    firstname: {
      type: Schema.Types.String,
      required: true,
    },
    lastname: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const AdminModel = mongoose.model<AdminDocument>("Admin", adminSchema);
