// import * as express from "express";
// import { PromoService } from "../services/promo.service";
// import { ApiErrorCode } from "../api-error-code.enum";
// import { checkUserConnected } from "../middlewares";
// import { checkUserAccess } from "../middlewares/role.middleware";

// export class PromoController {
//   private static instance: PromoController;

//   public static getInstance(): PromoController {
//     if (PromoController.instance === undefined) {
//       PromoController.instance = new PromoController();
//     }
//     return PromoController.instance;
//   }

//   private constructor() {}

//   async getPromoById(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const result = await PromoService.getInstance().getPromoById(id);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     } else if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.json(result);
//   }

//   async searchPromo(req: express.Request, res: express.Response) {
//     const percent = req.query.percent
//       ? Number.parseInt(req.query.percent as string)
//       : 0; // number
//     const promos = await PromoService.getInstance().searchPromo({
//       code: req.query.code as string,
//       percent: percent,
//     });
//     res.json(promos);
//   }

//   async createPromo(req: express.Request, res: express.Response) {
//     const data = req.body;
//     const result = await PromoService.getInstance().createPromo(data);
//     if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.json(result);
//   }

//   async deletePromo(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const result = await PromoService.getInstance().deletePromo(id);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     }
//     if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.status(204).end();
//   }

//   async updatePromo(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const data = req.body;
//     const result = await PromoService.getInstance().updatePromo(id, data);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     }
//     if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.json(result);
//   }

//   buildRouter(): express.Router {
//     const router = express.Router(); //création d'un nouveau routeur
//     router.get(
//       "/",
//       checkUserConnected(),
//       checkUserAccess(["promo-read"]),
//       this.searchPromo.bind(this)
//     );
//     router.get(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["promo-read"]),
//       this.getPromoById.bind(this)
//     );
//     router.post(
//       "/",
//       checkUserConnected(),
//       checkUserAccess(["promo-create"]),
//       this.createPromo.bind(this)
//     );
//     router.delete(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["promo-delete"]),
//       this.deletePromo.bind(this)
//     );
//     router.patch(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["promo-update"]),
//       this.updatePromo.bind(this)
//     );
//     return router;
//   }
// }
