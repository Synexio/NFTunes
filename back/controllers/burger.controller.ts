import * as express from "express";
import { FilterQuery, Schema, Types } from "mongoose";
import { BurgerDocument, BurgerModel } from "../models";
import { BurgerService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import { checkUserConnected } from "../middlewares";
import { checkUserAccess } from "../middlewares/role.middleware";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class BurgerController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: BurgerController;

  public static getInstance(): BurgerController {
    if (BurgerController.instance === undefined) {
      BurgerController.instance = new BurgerController();
    }
    return BurgerController.instance;
  }

  private constructor() {}
  // -------

  async searchBurger(req: express.Request, res: express.Response) {
    const limit = req.query.limit
      ? Number.parseInt(req.query.limit as string)
      : 20; //number
    const offset = req.query.offset
      ? Number.parseInt(req.query.offset as string)
      : 0; // number
    const availability = req.query.availability
      ? req.query.availability === "true"
      : undefined; // number
    const price = req.query.price
      ? Number.parseInt(req.query.price as string)
      : undefined; // number
    console.log("Fichier controller , ingredient :" + req.query.ingredient);
    const burgers = await BurgerService.getInstance().searchBurgers({
      name: req.query.name as string,
      availability: availability,
      price: price,
      ingredient: req.query.ingredient as string,
      limit: limit,
      offset: offset,
    });
    res.json(burgers);
  }
  async getBurgerById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await BurgerService.getInstance().getBurgerById(id);
    if (result === null) {
      return res.status(404).end();
    }
    if (result === null) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createBurger(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await BurgerService.getInstance().createBurger(data);
    console.log(result);
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end(); // CONFLICT
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async deleteBurger(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await BurgerService.getInstance().deleteBurger(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.status(204).end();
  }

  async updateBurger(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const data = req.body;
    const result = await BurgerService.getInstance().updateBurger(id, data);
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
    router.get("/", this.searchBurger.bind(this));
    router.get("/:id", this.getBurgerById.bind(this));
    router.post("/", this.createBurger.bind(this));
    router.delete(
      "/:id",
      checkUserConnected(),
      checkUserAccess(["burger-delete"]),
      this.deleteBurger.bind(this)
    );
    router.patch(
      "/:id",
      checkUserConnected(),
      checkUserAccess(["burger-update"]),
      this.updateBurger.bind(this)
    );
    return router;
  }
}
