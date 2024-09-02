import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface AlbumProps {
  _id: string;
  address: string;
  name: string;
  description: string;
  img: string;
  author: string;
  titles: string[];
}

export type AlbumDocument = AlbumProps & Document;

const albumSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      // unique: true,
      // required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
    },
    img: {
      type: Schema.Types.String,
    },
    author: {
      type: Schema.Types.String,
    },
    titles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Title",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const AlbumModel = mongoose.model<AlbumDocument>("Album", albumSchema);
