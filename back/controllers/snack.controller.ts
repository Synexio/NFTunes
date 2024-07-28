import * as express from "express";
import { SnackService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import {checkUserAccess} from "../middlewares/role.middleware";
import {checkUserConnected} from "../middlewares";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class SnackController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: SnackController;

  public static getInstance(): SnackController {
    if (SnackController.instance === undefined) {
      SnackController.instance = new SnackController();
    }
    return SnackController.instance;
  }

  private constructor() {}
  // -------

  async searchSnack(req: express.Request, res: express.Response) {
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
    const Snacks = await SnackService.getInstance().searchSnacks({
      name: req.query.name as string,
      price: price,
      limit: limit,
      offset: offset,
    });
    res.json(Snacks);
  }

  async getSnackById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await SnackService.getInstance().getSnackById(id);
    if (result === null) {
      return res.status(404).end();
    }
    if (result === null) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createSnack(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await SnackService.getInstance().createSnack(data);
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end(); // CONFLICT
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async deleteSnack(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await SnackService.getInstance().deleteSnack(id);
    if (result === ApiErrorCode.notFound) {
      return res.status(404).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.status(200).end();
  }

  async updateSnack(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const data = req.body;
    const result = await SnackService.getInstance().updateSnack(id, data);
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
    router.get("/", this.searchSnack.bind(this));
    router.get("/:id", this.getSnackById.bind(this));
    router.post("/", this.createSnack.bind(this));
    router.delete("/:id", checkUserConnected(), checkUserAccess(["snack-delete"]), this.deleteSnack.bind(this));
    router.patch("/:id", checkUserConnected(), checkUserAccess(["snack-update"]), this.updateSnack.bind(this));
    return router;
  }
}
