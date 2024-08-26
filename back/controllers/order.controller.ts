// import * as express from "express";
// import { Types, FilterQuery } from "mongoose";
// import { OrderDocument, OrderModel } from "../models";
// import { OrderService } from "../services/order.service";
// import { ApiErrorCode } from "../api-error-code.enum";
// import { Util } from "../utils";
// import { checkUserConnected } from "../middlewares";
// import { checkUserAccess } from "../middlewares/role.middleware";
// import {
//   BurgerService,
//   IngredientService,
//   IngredientUpdate,
// } from "../services";

// export class OrderController {
//   private static instance: OrderController;
//   public static getInstance(): OrderController {
//     if (OrderController.instance === undefined) {
//       OrderController.instance = new OrderController();
//     }
//     return OrderController.instance;
//   }
//   private constructor() {}

//   // -----------------------------------------------------------------------

//   /*async searchOrder(req: express.Request, res: express.Response){ // ceci est une fonction

//         const limit = req.query.limit ? Number.parseInt(req.query.limit as string) : 20; // number
//         const offset = req.query.offset ? Number.parseInt(req.query.offset as string) : 0; // number
//         const proof = req.query.proof ? Number.parseInt(req.query.proof as string) : undefined; // number

//         const Orders = await OrderService.getInstance().searchOrder({
//             type:req.query.type as string,
//             name:req.query.name as string,
//             proof:proof,
//             limit:limit,
//             offset:offset
//         });
//         res.json(Orders);
//     }*/

//   async getOrderById(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const result = await OrderService.getInstance().getOrderById(id);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     } else if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.json(result);
//   }

//   async createOrder(req: express.Request, res: express.Response) {
//     let data = req.body;
//     const result = await OrderService.getInstance().createOrder(data);

//     if (result === ApiErrorCode.alreadyExists) {
//       return res.status(409).end();
//     }
//     if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     if (result === ApiErrorCode.failed) {
//       return res.status(404).end();
//     }
//     res.json(result);
//   }

//   async deleteOrder(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const result = await OrderService.getInstance().deleteOrder(id);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     } else if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.status(204).end();
//   }

//   async updateOrder(req: express.Request, res: express.Response) {
//     const id = req.params.id;
//     const data = req.body;
//     const result = await OrderService.getInstance().updateOrder(id, data);
//     if (result === ApiErrorCode.notFound) {
//       return res.status(404).end();
//     }
//     if (result === ApiErrorCode.invalidParameters) {
//       return res.status(400).end();
//     }
//     res.json(result);
//   }

//   buildRouter(): express.Router {
//     const router = express.Router(); // création d'un nouveau router
//     router.post(
//       "/",
//       checkUserConnected(),
//       checkUserAccess(["commande-create"]),
//       express.json(),
//       this.createOrder.bind(this)
//     );
//     router.get(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["commande-read"]),
//       this.getOrderById.bind(this)
//     );
//     router.delete(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["commande-delete"]),
//       this.deleteOrder.bind(this)
//     );
//     router.patch(
//       "/:id",
//       checkUserConnected(),
//       checkUserAccess(["commande-uodate"]),
//       this.updateOrder.bind(this)
//     );

//     /* router.get("/", this.searchOrder.bind(this)); // bind permet de ne pas perdre le "this"
//      */
//     return router;
//   }
// }
