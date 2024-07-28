import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { SessionProps } from "./session.model";
import { RoleProps } from "./role.model";

export interface UserProps {
  _id: string;
  login: string;
  lastname: string;
  firstname: string;
  password: string;
  sessions: (SessionProps | string)[];
  role: string | RoleProps;
}

export type UserDocument = UserProps & Document;

const userSchema = new Schema(
  {
    login: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    firstname: {
      type: Schema.Types.String,
      // required: true,
    },
    lastname: {
      type: Schema.Types.String,
      // required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    sessions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Session",
      },
    ],
    role: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Role",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = mongoose.model<UserDocument>("User", userSchema);
