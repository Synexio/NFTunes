import * as express from "express";
import { DrinkService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import {checkUserConnected} from "../middlewares";
import {checkUserAccess} from "../middlewares/role.middleware";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class DrinkController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: DrinkController;

  public static getInstance(): DrinkController {
    if (DrinkController.instance === undefined) {
      DrinkController.instance = new DrinkController();
    }
    return DrinkController.instance;
  }

  private constructor() {}
  // -------

  async searchDrink(req: express.Request, res: express.Response) {
    const limit = req.query.limit
      ? Number.parseInt(req.query.limit as string)
      : 20; //number
    const offset = req.query.offset
      ? Number.parseInt(req.query.offset as string)
      : 0; // number
    const price = req.query.price
      ? Number.parseInt(req.query.price as string)
      : undefined; // number
    const availability = req.query.availability
      ? req.query.availability === "true"
      : undefined; // number
    const drinks = await DrinkService.getInstance().searchDrinks({
      name: req.query.name as string,
      price: price,
      limit: limit,
      offset: offset,
    });
    res.json(drinks);
  }

  async getDrinkById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await DrinkService.getInstance().getDrinkById(id);
    if (result === null) {
      return res.status(404).end();
    }
    if (result === null) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createDrink(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await DrinkService.getInstance().createDrink(data);
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end(); // CONFLICT
    }
    res.json(result);
  }

  async deleteDrink(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await DrinkService.getInstance().deleteDrink(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.status(204).end();
  }

  async updateDrink(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const data = req.body;
    const result = await DrinkService.getInstance().updateDrink(id, data);
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
    router.get("/", this.searchDrink.bind(this));
    router.get("/:id", this.getDrinkById.bind(this));
    router.post("/", this.createDrink.bind(this));
    router.delete("/:id",checkUserConnected(), checkUserAccess(["drink-delete"]), this.deleteDrink.bind(this));
    router.patch("/:id",checkUserConnected(), checkUserAccess(["drink-update"]), this.updateDrink.bind(this));
    return router;
  }
}
