// import { BurgerDocument, BurgerModel, BurgerProducts } from "../models";
// import { FilterQuery, Types } from "mongoose";
// import { ApiErrorCode } from "../api-error-code.enum";
// import { IngredientService } from "./ingredient.service";

// export class BurgerService {
//   // Singleton
//   private static instance: BurgerService;
//   private constructor() {}
//   public static getInstance(): BurgerService {
//     if (BurgerService.instance === undefined) {
//       BurgerService.instance = new BurgerService();
//     }
//     return BurgerService.instance;
//   }

//   async getBurgerById(id: string): Promise<BurgerDocument | null> {
//     if (!Types.ObjectId.isValid(id)) {
//       return null;
//     }
//     const burger = await BurgerModel.findById(id);
//     if (burger === null) {
//       return null;
//     }
//     return burger;
//   }

//   async getPrice(foods: any): Promise<number> {
//     let total = 0;
//     for (const food of foods) {
//       const burger = await this.getBurgerById(food);
//       if (burger !== null) {
//         total += burger.price;
//       }
//     }
//     return total;
//   }

//   async searchBurgers(
//     search: BurgerSearch
//   ): Promise<BurgerDocument[] | ApiErrorCode> {
//     const filter: FilterQuery<BurgerDocument> = {};
//     if (search.name !== undefined) {
//       filter.name = {
//         $regex: search.name,
//         $options: "i", // case insensitive
//       };
//     }

//     if (search.price !== undefined) {
//       filter.price = {
//         $gte: search.price,
//       };
//     }

//     if (search.availability !== undefined) {
//       const testBool = search.availability.toString() === "true" ? false : true;
//       filter.availability = {
//         $ne: testBool,
//       };
//     }

//     if (search.ingredient !== undefined) {
//       const ingredientId =
//         await IngredientService.getInstance().getIngredientIdByName(
//           search.ingredient
//         );
//       console.log("Fichier service , ingredientId :" + ingredientId);
//       filter["products.ingredient"] = {
//         $eq: ingredientId,
//       };
//     }

//     const query = BurgerModel.find(filter);
//     if (search.limit !== undefined) {
//       query.limit(search.limit);
//     }

//     if (search.offset !== undefined) {
//       query.skip(search.offset);
//     }

//     return query.exec();
//   }

//   async createBurger(
//     create: BurgerCreate
//   ): Promise<BurgerDocument | ApiErrorCode> {
//     try {
//       const model = new BurgerModel(create);
//       console.log(model);
//       const burger = await model.save();
//       return burger;
//     } catch (err) {
//       return ApiErrorCode.invalidParameters;
//     }
//   }

//   async deleteBurger(id: string): Promise<ApiErrorCode> {
//     if (!Types.ObjectId.isValid(id)) {
//       return ApiErrorCode.invalidParameters;
//     }
//     const burger = await BurgerModel.findByIdAndDelete(id);
//     if (burger === null) {
//       return ApiErrorCode.notFound;
//     }
//     return ApiErrorCode.success;
//   }

//   async updateBurger(
//     id: string,
//     update: BurgerUpdate
//   ): Promise<BurgerDocument | ApiErrorCode> {
//     if (!Types.ObjectId.isValid(id)) {
//       return ApiErrorCode.invalidParameters;
//     }
//     const burger = await BurgerModel.findByIdAndUpdate(id, update, {
//       returnDocument: "after",
//     });
//     if (burger === null) {
//       return ApiErrorCode.notFound;
//     }
//     return burger;
//   }
// }

// export interface BurgerSearch {
//   readonly name?: string;
//   readonly price?: number;
//   readonly availability?: boolean;
//   readonly ingredient?: string;
//   readonly limit?: number;
//   readonly offset?: number;
// }

// export interface BurgerCreate {
//   readonly name: string;
//   readonly price: number;
//   readonly availability: boolean;
//   readonly products: BurgerProducts[];
// }

// export interface BurgerUpdate {
//   readonly name?: string;
//   readonly price?: number;
//   readonly availability?: boolean;
//   readonly products?: BurgerProducts[];
// }
