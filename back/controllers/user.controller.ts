import {Request, Response, Router} from "express";
import {UserService} from "../services";
import {ApiErrorCode} from "../api-error-code.enum";

export class UserController {
    private static instance: UserController;

    private constructor() {
    }

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

    async deleteUser(req: Request, res: Response) {
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

    async getUserById(req: Request, res: Response) {
        const id = req.params.id;
        const result = await UserService.getInstance().getUserById(id);
        if (result === null) {
            res.status(404).end();
            return;
        }
        res.json(result);
    }

    async getAllUsers(req: Request, res: Response) {
        const result = await UserService.getInstance().getAllUsers();
        if (result === null) {
            res.status(404).end();
            return;
        }
        res.json(result);
    }

    buildRouter(): Router {
        const router = Router();
        router.get("/", this.getAllUsers.bind(this));
        router.post("/create", this.createUser.bind(this));
        router.patch("/update/:id", this.updateUser.bind(this));
        router.delete("/:id", this.deleteUser.bind(this));
        router.get("/:id", this.getUserById.bind(this));

        return router;
    }
}
