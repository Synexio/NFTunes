import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IngredientProps {
  _id: string;
  name: string;
  origin: string;
  quantity: number;
  price: number;
}

export type IngredientDocument = IngredientProps & Document;

const ingredientSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    origin: {
      type: Schema.Types.String,
      required: true,
    },
    quantity: {
      type: Schema.Types.Number,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export const IngredientModel = mongoose.model<IngredientDocument>(
  "Ingredient",
  ingredientSchema
);
