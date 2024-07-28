import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface MenuProps {
  _id: string;
  name: string;
  burger: string;
  drink: string;
  snack: string;
  price: number;
}

export type MenuDocument = MenuProps & Document;

const MenuSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    burger: {
      type: Schema.Types.ObjectId,
      ref: "Burger",
      required: true,
    },
    drink: {
      type: Schema.Types.ObjectId,
      default: "62c81a14eb92878438e82615",
      ref: "Drink",
    },
    snack: {
      type: Schema.Types.ObjectId,
      default: "62c82b08b87a78393fd65664",
      ref: "Snack",
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  {
    versionKey: false,
    collection: "Menus",
    timestamps: true,
  }
);

export const MenuModel = mongoose.model<MenuDocument>("Menu", MenuSchema);
