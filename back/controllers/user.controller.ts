import { Request, Response, Router } from "express";
import { UserService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";

export class UserController {
  private static instance: UserController;

  private constructor() {}

  public static getInstance(): UserController {
    if (UserController.instance === undefined) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const data = req.body;
    const result = await UserService.getInstance().createUser(data);
    if (result === ApiErrorCode.alreadyExists) {
      res.status(409).end(); // CONFLICT
      return;
    }
    res.json(result);
  }
  async updateUser(req: Request, res: Response) {
    const id = req.params.id;

    const data = req.body;
    const result = await UserService.getInstance().updateUser(id, data);

    // console.log(id, data, result);
    // if (result === ApiErrorCode.notFound) {
    //   return res.status(404).end();
    // }
    // if (result === ApiErrorCode.invalidParameters) {
    //   return res.status(400).end();
    // }
    res.json(result);
  }

  buildRouter(): Router {
    const router = Router();
    router.post("/create", this.createUser.bind(this));
    router.patch("/update/:id", this.updateUser.bind(this));

    return router;
  }
}
