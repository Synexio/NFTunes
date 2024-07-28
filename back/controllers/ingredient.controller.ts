import * as express from "express";
import { IngredientService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import { checkUserConnected } from "../middlewares";
import { checkUserAccess } from "../middlewares/role.middleware";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class IngredientController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: IngredientController;

  public static getInstance(): IngredientController {
    if (IngredientController.instance === undefined) {
      IngredientController.instance = new IngredientController();
    }
    return IngredientController.instance;
  }

  private constructor() {}
  // -------

  async searchIngredient(req: express.Request, res: express.Response) {
    const limit = req.query.limit
      ? Number.parseInt(req.query.limit as string)
      : 20; //number
    const offset = req.query.offset
      ? Number.parseInt(req.query.offset as string)
      : 0; // number
    const quantity = req.query.quantity
      ? Number.parseInt(req.query.quantity as string)
      : undefined; // number
    const price = req.query.price
      ? Number.parseInt(req.query.price as string)
      : undefined; // number
    const ingredients = await IngredientService.getInstance().searchIngredients(
      {
        name: req.query.name as string,
        origin: req.query.origin as string,
        quantity: quantity,
        price: price,
        limit: limit,
        offset: offset,
      }
    );
    res.json(ingredients);
  }

  async getIngredientById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await IngredientService.getInstance().getIngredientById(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async getIngredientIdByName(req: express.Request, res: express.Response) {
    const name = req.params.name;
    console.log(name);
    const result = await IngredientService.getInstance().getIngredientIdByName(
      name
    );
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createIngredient(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await IngredientService.getInstance().createIngredient(data);
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async deleteIngredient(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await IngredientService.getInstance().deleteIngredient(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.status(204).end();
  }

  async updateIngredient(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const data = req.body;
    const result = await IngredientService.getInstance().updateIngredient(
      id,
      data
    );
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
    router.get(
      "/",
      checkUserConnected(),
      checkUserAccess(["menu-read"]),
      this.searchIngredient.bind(this)
    );
    router.get(
      "/:id",
      checkUserConnected(),
      checkUserAccess(["menu-read"]),
      this.getIngredientById.bind(this)
    );
    router.get(
      "/id/:name",
      checkUserConnected(),
      checkUserAccess(["menu-read"]),
      this.getIngredientIdByName.bind(this)
    );
    router.post(
      "/",
      checkUserConnected(),
      checkUserAccess(["menu-create"]),
      this.createIngredient.bind(this)
    );
    router.delete(
      "/:id",
      checkUserConnected(),
      checkUserAccess(["menu-delete"]),
      this.deleteIngredient.bind(this)
    );
    router.patch(
      "/:id",
      checkUserConnected(),
      checkUserAccess(["menu-update"]),
      this.updateIngredient.bind(this)
    );
    return router;
  }
}
