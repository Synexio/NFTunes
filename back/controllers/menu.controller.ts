import * as express from "express";
import { MenuService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import {checkUserAccess} from "../middlewares/role.middleware";
import {checkUserConnected} from "../middlewares";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class MenuController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: MenuController;

  public static getInstance(): MenuController {
    if (MenuController.instance === undefined) {
      MenuController.instance = new MenuController();
    }
    return MenuController.instance;
  }

  private constructor() {}
  // -------

  //   async searchMenu(req: express.Request, res: express.Response) {
  //     const limit = req.query.limit
  //       ? Number.parseInt(req.query.limit as string)
  //       : 20; //number
  //     const offset = req.query.offset
  //       ? Number.parseInt(req.query.offset as string)
  //       : 0; // number
  //     const quantity = req.query.quantity
  //       ? Number.parseInt(req.query.quantity as string)
  //       : undefined; // number
  //     const price = req.query.price
  //       ? Number.parseInt(req.query.price as string)
  //       : undefined; // number
  //     const Menus = await MenuService.getInstance().searchMenu({
  //       name: req.query.name as string,
  //       burger: req.query.burger as string,
  //       drink: req.query.drink as string,
  //       snack: req.query.snack as string,
  //       price: price,
  //       limit: limit,
  //       offset: offset,
  //     });
  //     res.json(Menus);
  //   }

  async getAllMenus(req: express.Request, res: express.Response) {
    const result = await MenuService.getInstance().getAllMenus();
    if (result === null) {
      return res.status(404).end();
    }

    res.json(result);
  }

  async getMenuById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await MenuService.getInstance().getMenuById(id);
    if (result === null) {
      return res.status(404).end();
    }

    res.json(result);
  }

  async getMenuIdByName(req: express.Request, res: express.Response) {
    const name = req.params.name;
    console.log(name);
    const result = await MenuService.getInstance().getMenuByName(name);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createMenu(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await MenuService.getInstance().createMenu(data);
    if (result === ApiErrorCode.invalidParameters) {
      console.log(result);
      return res.status(400).end();
    }
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end(); // CONFLICT
    }
    res.json(result);
  }

  async deleteMenu(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await MenuService.getInstance().deleteMenu(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.status(204).end();
  }

  async updateMenu(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const data = req.body;
    const result = await MenuService.getInstance().updateMenu(id, data);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  buildRouter(): express.Router {
    const router = express.Router(); //création d'un nouveau routeur
    // router.get("/", this.searchMenu.bind(this));
    router.get("/:id", this.getMenuById.bind(this));
    router.get("/", this.getAllMenus.bind(this));
    router.get("/id/:name", this.getMenuIdByName.bind(this));
    router.post("/", this.createMenu.bind(this));
    router.delete("/:id", checkUserConnected(), checkUserAccess(["menu-delete"]), this.deleteMenu.bind(this));
    router.patch("/:id", checkUserConnected(), checkUserAccess(["menu-update"]), this.updateMenu.bind(this));
    return router;
  }
}
