// import { IngredientDocument, IngredientModel } from "../models";
// import { FilterQuery, Types } from "mongoose";
// import { ApiErrorCode } from "../api-error-code.enum";

// export class IngredientService {
//   // Singleton
//   private static instance: IngredientService;
//   private constructor() {}
//   public static getInstance(): IngredientService {
//     if (IngredientService.instance === undefined) {
//       IngredientService.instance = new IngredientService();
//     }
//     return IngredientService.instance;
//   }

//   async getIngredientById(
//     id: string
//   ): Promise<IngredientDocument | ApiErrorCode> {
//     if (!Types.ObjectId.isValid(id)) {
//       return ApiErrorCode.invalidParameters;
//     }
//     const ingredient = await IngredientModel.findById(id);
//     if (ingredient === null) {
//       return ApiErrorCode.notFound;
//     }
//     return ingredient;
//   }

//   async getIngredientIdByName(
//     name: string
//   ): Promise<IngredientDocument | ApiErrorCode> {
//     if (typeof name !== "string") {
//       return ApiErrorCode.invalidParameters;
//     }
//     const ingredient = await IngredientModel.findOne({
//       name: name,
//     });
//     if (ingredient === null) {
//       return ApiErrorCode.notFound;
//     }
//     return ingredient.id;
//   }

//   async searchIngredients(
//     search: IngredientSearch
//   ): Promise<IngredientDocument[] | ApiErrorCode> {
//     const filter: FilterQuery<IngredientDocument> = {};
//     if (search.name !== undefined) {
//       filter.name = {
//         $regex: search.name,
//         $options: "i", // case insensitive
//       };
//     }

//     if (search.origin !== undefined) {
//       filter.origin = {
//         $regex: search.origin,
//         $options: "i", // case insensitive
//       };
//     }

//     if (search.quantity !== undefined) {
//       filter.quantity = {
//         $gte: search.quantity,
//       };
//     }

//     if (search.price !== undefined) {
//       filter.price = {
//         $gte: search.price,
//       };
//     }

//     const query = IngredientModel.find(filter);
//     if (search.limit !== undefined) {
//       query.limit(search.limit);
//     }

//     if (search.offset !== undefined) {
//       query.skip(search.offset);
//     }

//     return query.exec();
//   }

//   async createIngredient(create: IngredientCreate): Promise<IngredientDocument | ApiErrorCode> {
//     try {
//       const model = new IngredientModel(create);
//       const ingredient = await model.save();
//       return ingredient;
//     } catch (err) {
//       return ApiErrorCode.invalidParameters;
//     }
//   }

//   async deleteIngredient(id: string): Promise<ApiErrorCode> {
//     if (!Types.ObjectId.isValid(id)) {
//       return ApiErrorCode.invalidParameters;
//     }
//     const ingredient = await IngredientModel.findByIdAndDelete(id);
//     if (ingredient === null) {
//       return ApiErrorCode.notFound;
//     }
//     return ApiErrorCode.success;
//   }

//   async updateIngredient(
//     id: string,
//     update: IngredientUpdate
//   ): Promise<IngredientDocument | ApiErrorCode> {
//     if (!Types.ObjectId.isValid(id)) {
//       return ApiErrorCode.invalidParameters;
//     }
//     const ingredient = await IngredientModel.findByIdAndUpdate(id, update, {
//       returnDocument: "after",
//     });
//     if (ingredient === null) {
//       return ApiErrorCode.notFound;
//     }
//     return ingredient;
//   }
// }

// export interface IngredientSearch {
//   readonly name?: string;
//   readonly origin?: string;
//   readonly quantity?: number;
//   readonly price?: number;
//   readonly limit?: number;
//   readonly offset?: number;
// }

// export interface IngredientCreate {
//   readonly name: string;
//   readonly origin: string;
//   readonly quantity: number;
//   readonly price: number;
// }

// export interface IngredientUpdate {
//   readonly name?: string;
//   readonly origin?: string;
//   readonly quantity?: number;
//   readonly price?: number;
// }
