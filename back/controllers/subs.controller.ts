import * as express from "express";
import {SubsService} from "../services";
import {ApiErrorCode} from "../api-error-code.enum";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class SubsController {
    // -- DESIGN PATTERN SINGLETON
    //Permet d'avoir une seule instance d'une classe au maximum
    private static instance: SubsController;

    public static getInstance(): SubsController {
        if (SubsController.instance === undefined) {
            SubsController.instance = new SubsController();
        }
        return SubsController.instance;
    }

    private constructor() {
    }

    async getSubsById(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await SubsService.getInstance().getSubsById(id);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async getSubsByUserId(req: express.Request, res: express.Response) {
        const userId = req.params.userId;
        const result = await SubsService.getInstance().getSubsByUserId(userId);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async getAllSubs(req: express.Request, res: express.Response) {
        const result = await SubsService.getInstance().getAllSubs();
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async createSubs(req: express.Request, res: express.Response) {
        const data = req.body;
        const result = await SubsService.getInstance().createSubs(data);
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        if (result === ApiErrorCode.alreadyExists) {
            return res.status(409).end(); // CONFLICT
        }
        res.json(result);
    }

    async deleteSubs(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await SubsService.getInstance().deleteSubs(id);
        if (result === ApiErrorCode.notFound) {
            return res.status(404).end();
        }
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        res.status(204).end();
    }

    async isSubscribed(req: express.Request, res: express.Response) {
        const userId = req.params.userId;
        const result = await SubsService.getInstance().isSubscribed(userId);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    buildRouter(): express.Router {
        const router = express.Router(); //création d'un nouveau routeur
        router.get("/", this.getAllSubs.bind(this));
        router.get("/:userId", this.getSubsByUserId.bind(this));
        router.get("/:id", this.getSubsById.bind(this));
        router.get("/isSubscribed/:userId", this.isSubscribed.bind(this));
        router.post("/create", this.createSubs.bind(this));
        router.delete("/:id", this.deleteSubs.bind(this)
        );
        return router;
    }
}
