import { Request, Response, Router } from "express";
import { UserService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import * as express from "express";

export class UserController {
  private static instance: UserController;

  private constructor() {}

  public static getInstance(): UserController {
    if (UserController.instance === undefined) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  async createUser(req: express.Request, res: express.Response): Promise<void> {
    const data = req.body;
    const result = await UserService.getInstance().createUser(data);
    if (result === ApiErrorCode.invalidParameters) {
      res.status(400).end();
      return;
    }
    if (result === ApiErrorCode.alreadyExists) {
      res.status(409).end();
      return;
    }
    res.json(result);
  }

  async updateUser(req: express.Request, res: express.Response) {
    const id = req.params.id;

    const data = req.body;
    const result = await UserService.getInstance().updateUser(id, data);
    if (result === ApiErrorCode.invalidParameters) {
      res.status(400).end();
      return;
    }
    if (result === ApiErrorCode.notFound) {
      res.status(404).end();
      return;
    }
    res.json(result);
  }

  async deleteUser(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await UserService.getInstance().deleteUser(id);
    if (result === ApiErrorCode.notFound) {
      res.status(404).end();
      return;
    }
    if (result === ApiErrorCode.invalidParameters) {
      res.status(400).end();
      return;
    }
    res.status(204).end();
  }

  async getUserById(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const result = await UserService.getInstance().getUserById(id);
    if (result === null) {
      res.status(404).end();
      return;
    }
    res.json(result);
  }

  async getAllUsers(req: express.Request, res: express.Response) {
    const result = await UserService.getInstance().getAllUsers();
    if (result === null) {
      res.status(404).end();
      return;
    }
    res.json(result);
  }

  async searchUsers(req: Request, res: Response): Promise<void> {
    const limit = req.query.limit
      ? Number.parseInt(req.query.limit as string)
      : 20;
    const offset = req.query.offset
      ? Number.parseInt(req.query.offset as string)
      : 0;

    const users = await UserService.getInstance().searchUsers({
      address: req.query.address as string,
      firstname: req.query.firstname as string,
      lastname: req.query.lastname as string,
      email: req.query.email as string,
      banned: req.query.banned === "true", // Convert string to boolean
      subscription: req.query.subscription as string,
      role: req.query.role as string,
      limit: limit,
      offset: offset,
    });

    res.json(users);
  }
  async getArtistInfoByAddress(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const { address } = req.params; // Assuming you pass the artist's address as a URL parameter

    try {
      const user = await UserService.getInstance().getUserByArtistAddress(
        address
      );

      if (!user) {
        res.status(404).json({ message: "Artist not found" });
        return;
      }

      res.json({
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        email: user.email,
        subscription: user.subscription,
        banned: user.banned,
      });
    } catch (error) {
      console.error("Error fetching artist information:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getUserByAddress(req: express.Request, res: express.Response) {
    const address = req.params.address;
      const result = await UserService.getInstance().getUserByAddress(address);
    if (result === null) {
      res.status(404).end();
      return;
    }
    res.json(result);
  }

  buildRouter(): Router {
    const router = Router();
    router.get("/", this.getAllUsers.bind(this));
    router.get("/search", this.searchUsers.bind(this));
    router.get("/artist/:address", this.getArtistInfoByAddress.bind(this));
    router.post("/create", this.createUser.bind(this));
    router.patch("/update/:id", this.updateUser.bind(this));
    router.delete("/:id", this.deleteUser.bind(this));
    router.get("/:address", this.getUserByAddress.bind(this));
    router.get("/:id", this.getUserById.bind(this));

    return router;
  }
}
