import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import { IngredientProps } from "./ingredient.model";

export interface BurgerProducts {
  ingredient: string; // id de l'ingrédient
  quantity: number;
}

export interface BurgerProps {
  _id: string;
  name: string;
  price: number;
  availability: boolean;
  products: BurgerProducts[];
}

export type BurgerDocument = BurgerProps & IngredientProps & Document;
export type BurgerProductsDocument = BurgerProducts & Document;

const burgerProductsSchema = new Schema(
  {
    ingredient: Schema.Types.String,
    quantity: Schema.Types.Number,
  },
  {
    _id: false,
  }
);

const burgerSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      default: 0,
      required: true,
    },
    availability: {
      type: Schema.Types.Boolean,
      required: true,
    },
    products: [
      {
        type: burgerProductsSchema,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const BurgerModel = mongoose.model<BurgerDocument>(
  "Burger",
  burgerSchema
);
export const BurgerProductsModel = mongoose.model<BurgerProductsDocument>(
  "BurgerProducts",
  burgerProductsSchema
);
