import * as express from "express";
import { AlbumService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class AlbumController {
  // -- DESIGN PATTERN SINGLETON
  //Permet d'avoir une seule instance d'une classe au maximum
  private static instance: AlbumController;

  public static getInstance(): AlbumController {
    if (AlbumController.instance === undefined) {
      AlbumController.instance = new AlbumController();
    }
    return AlbumController.instance;
  }

  private constructor() {}
  // -------

  //   async searchSnack(req: express.Request, res: express.Response) {
  //     const limit = req.query.limit
  //       ? Number.parseInt(req.query.limit as string)
  //       : 20; //number
  //     const offset = req.query.offset
  //       ? Number.parseInt(req.query.offset as string)
  //       : 0; // number
  //     const price = req.query.price
  //       ? Number.parseInt(req.query.price as string)
  //       : undefined; // number
  //     const availability = req.query.availability
  //       ? req.query.availability === "true"
  //       : undefined; // number
  //     const Snacks = await AlbumService.getInstance().searchSnacks({
  //       name: req.query.name as string,
  //       price: price,
  //       limit: limit,
  //       offset: offset,
  //     });
  //     res.json(Snacks);
  //   }

  async getAlbumById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await AlbumService.getInstance().getAlbumById(id);
    if (result === null) {
      return res.status(404).end();
    }
    if (result === null) {
      return res.status(400).end();
    }
    res.json(result);
  }

  async createAlbum(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await AlbumService.getInstance().createAlbum(data);
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  //   async deleteAlbum(req: express.Request, res: express.Response) {
  //     const id = req.params.id;
  //     const result = await AlbumService.getInstance().deleteAlbum(id);
  //     if (result === ApiErrorCode.notFound) {
  //       return res.status(404).end();
  //     }
  //     if (result === ApiErrorCode.invalidParameters) {
  //       return res.status(400).end();
  //     }
  //     res.status(200).end();
  //   }

  //   async updateAlbum(req: express.Request, res: express.Response) {
  //     const id = req.params.id;
  //     const data = req.body;
  //     const result = await AlbumService.getInstance().updateAlbum(id, data);
  //     if (result === ApiErrorCode.notFound) {
  //       return res.status(404).end();
  //     }
  //     if (result === ApiErrorCode.invalidParameters) {
  //       return res.status(400).end();
  //     }
  //     res.json(result);
  //   }

  buildRouter(): express.Router {
    const router = express.Router(); //création d'un nouveau routeur
    router.get("/:id", this.getAlbumById.bind(this));
    router.post("/create", this.createAlbum.bind(this));
    // router.delete(
    //   "/:id",
    //   checkUserConnected(),
    //   checkUserAccess(["snack-delete"]),
    //   this.deleteAlbum.bind(this)
    // );
    // router.patch(
    //   "/:id",
    //   checkUserConnected(),
    //   checkUserAccess(["snack-update"]),
    //   this.updateAlbum.bind(this)
    // );
    return router;
  }
}
