import * as express from "express";
import { ApiErrorCode } from "../api-error-code.enum";
import { ArtistService } from "../services";

export class ArtistController {
  private static instance: ArtistController;

  public static getInstance(): ArtistController {
    if (ArtistController.instance === undefined) {
      ArtistController.instance = new ArtistController();
    }
    return ArtistController.instance;
  }

  private constructor() {}

  async createArtist(req: express.Request, res: express.Response) {
    const data = req.body;
    const result = await ArtistService.getInstance().createArtist(data);
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }

  // async getPromoById(req: express.Request, res: express.Response) {
  //   const id = req.params.id;
  //   const result = await PromoService.getInstance().getPromoById(id);
  //   if (result === ApiErrorCode.notFound) {
  //     return res.status(404).end();
  //   } else if (result === ApiErrorCode.invalidParameters) {
  //     return res.status(400).end();
  //   }
  //   res.json(result);
  // }

  // async searchPromo(req: express.Request, res: express.Response) {
  //   const percent = req.query.percent
  //     ? Number.parseInt(req.query.percent as string)
  //     : 0; // number
  //   const promos = await PromoService.getInstance().searchPromo({
  //     code: req.query.code as string,
  //     percent: percent,
  //   });
  //   res.json(promos);
  // }

  // async deletePromo(req: express.Request, res: express.Response) {
  //   const id = req.params.id;
  //   const result = await PromoService.getInstance().deletePromo(id);
  //   if (result === ApiErrorCode.notFound) {
  //     return res.status(404).end();
  //   }
  //   if (result === ApiErrorCode.invalidParameters) {
  //     return res.status(400).end();
  //   }
  //   res.status(204).end();
  // }

  // async updatePromo(req: express.Request, res: express.Response) {
  //   const id = req.params.id;
  //   const data = req.body;
  //   const result = await PromoService.getInstance().updatePromo(id, data);
  //   if (result === ApiErrorCode.notFound) {
  //     return res.status(404).end();
  //   }
  //   if (result === ApiErrorCode.invalidParameters) {
  //     return res.status(400).end();
  //   }
  //   res.json(result);
  // }

  buildRouter(): express.Router {
    const router = express.Router(); //création d'un nouveau routeur
    router.post("/create", this.createArtist.bind(this));

    return router;
  }
}
