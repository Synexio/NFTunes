import { BurgerProps, MenuDocument, MenuModel, MenuProps } from "../models";
import { Types, FilterQuery } from "mongoose";
import { ApiErrorCode } from "../api-error-code.enum";
import { BurgerService } from "./burger.service";
import { IngredientService, IngredientUpdate } from "./ingredient.service";
import { Util } from "../utils";

export class MenuService {
  private static instance: MenuService;
  private constructor() {}
  public static getInstance(): MenuService {
    if (MenuService.instance === undefined) {
      MenuService.instance = new MenuService();
    }
    return MenuService.instance;
  }

  //   async searchMenu(search: MenuSearch): Promise<MenuDocument[] | ApiErrorCode> {
  //     const filter: FilterQuery<MenuDocument> = {};
  //     if (search.number !== undefined) {
  //       filter.number = {
  //         $gte: search.number,
  //       };
  //     }

  //     if (search.price !== undefined) {
  //       filter.price = {
  //         $gte: search.price,
  //       };
  //     }

  //     if (search.status !== undefined) {
  //       const testBool = search.status.toString() === "true" ? false : true;
  //       filter.status = {
  //         $ne: testBool,
  //       };
  //     }

  //     const query = MenuModel.find(filter);
  //     if (search.limit !== undefined) {
  //       query.limit(search.limit);
  //     }

  //     if (search.offset !== undefined) {
  //       query.skip(search.offset);
  //     }

  //     return query.exec();
  //   }
  async getAllMenus(): Promise<MenuDocument[] | null> {
    const menu = await MenuModel.find();
    if (menu === null) {
      return null;
    }
    return menu;
  }

  async getMenuById(id: string): Promise<MenuDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const menu = await MenuModel.findById(id);
    if (menu === null) {
      return null;
    }
    return menu;
  }
  async getMenuPrice(foods: any): Promise<number> {
    let total = 0;
    for (const food of foods) {
      const menu = await this.getMenuById(food.menuName);
      if (menu !== null) {
        total += menu.price;
      }
    }
    return total;
  }

  async createMenu(create: MenuCreate): Promise<MenuDocument | ApiErrorCode> {
    try {
      const model = new MenuModel(create);
      const menu = await model.save();
      console.log(menu);
      return menu;
    } catch (err) {
      console.log("je suis là");

      return ApiErrorCode.invalidParameters;
    }
  }
  async getMenuByName(name: string): Promise<string | ApiErrorCode> {
    console.log(name);

    if (!Types.ObjectId.isValid(name)) {
      return ApiErrorCode.invalidParameters;
    }
    const menu = await MenuModel.findOne({ name });
    if (menu === null) {
      return ApiErrorCode.notFound;
    }
    console.log(name);

    return name;
  }
  async deleteMenu(id: string): Promise<ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const Menu = await MenuModel.findByIdAndDelete(id);
    if (Menu === null) {
      return ApiErrorCode.notFound;
    }
    return ApiErrorCode.success;
  }
  async updateMenu(
    id: string,
    update: MenuUpdate
  ): Promise<MenuDocument | ApiErrorCode> {
    if (!Types.ObjectId.isValid(id)) {
      return ApiErrorCode.invalidParameters;
    }
    const burger = await MenuModel.findByIdAndUpdate(id, update, {
      returnDocument: "after",
    });
    if (burger === null) {
      return ApiErrorCode.notFound;
    }
    return burger;
  }
}

export interface MenuCreate {
  readonly name: string;
  readonly burger: string;
  readonly drink?: string;
  readonly snack?: string;
  readonly price: number;
}

export interface MenuUpdate {
  readonly name: string;
  readonly burger: string;
  readonly drink: string;
  readonly snack: string;
  readonly price: number;
}
export interface MenuSearch {
  readonly name?: string;
  readonly burger?: string;
  readonly drink?: string;
  readonly snack?: string;
  readonly price?: number;
  readonly limit?: number;
  readonly offset?: number;
}
