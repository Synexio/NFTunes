import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { TitleProps } from "./title.model";

export interface AlbumProps {
  _id: string;
  address: string;
  name: string;
  titles: TitleProps[];
}

export type AlbumDocument = AlbumProps & Document;

const albumSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    titles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Title",
        // required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const AlbumModel = mongoose.model<AlbumDocument>("Album", albumSchema);
