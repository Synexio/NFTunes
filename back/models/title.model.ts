import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface TitleProps {
  _id: string;
  address: string;
  name: string;
  author: string;
  genre: string;
  audio: string;
  album_img: string;
  tokenID: number;
  album: string;
}

export type TitleDocument = TitleProps & Document;

const titleSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      // required: true,
    },
    name: {
      type: Schema.Types.String,
    },
    author: {
      type: Schema.Types.String,
    },
    genre: {
      type: Schema.Types.String,
    },
    audio: {
      type: Schema.Types.String,
    },
    album_img: {
      type: Schema.Types.String,
    },
    tokenId: {
      type: Schema.Types.Number,
    },
    album: {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TitleModel = mongoose.model<TitleDocument>("Title", titleSchema);
