import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { AlbumProps } from "./album.model";

export interface ArtistProps {
  _id: string;
  address: string;
  claimCount: number;
  status: string;
  currentReward: string;
  albums: AlbumProps[];
}

export type ArtistDocument = ArtistProps & Document;

const artistSchema = new Schema(
  {
    address: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    claimCount: {
      type: Schema.Types.Number,
      required: true,
      default: 0,
    },
    status: {
      type: Schema.Types.String,
      required: true,
    },
    currentReward: {
      type: Schema.Types.String,
      required: true,
    },
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const ArtistModel = mongoose.model<ArtistDocument>(
  "Artist",
  artistSchema
);
