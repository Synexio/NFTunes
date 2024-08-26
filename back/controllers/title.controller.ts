import * as express from "express";
import {TitleService} from "../services";
import {ApiErrorCode} from "../api-error-code.enum";

/**
 * Chaque controlleur aura son propre routeur à construire
 */

export class TitleController {
    // -- DESIGN PATTERN SINGLETON
    //Permet d'avoir une seule instance d'une classe au maximum
    private static instance: TitleController;

    public static getInstance(): TitleController {
        if (TitleController.instance === undefined) {
            TitleController.instance = new TitleController();
        }
        return TitleController.instance;
    }

    private constructor() {
    }

    async getTitleById(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await TitleService.getInstance().getTitleById(id);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async getAllTitles(req: express.Request, res: express.Response) {
        const result = await TitleService.getInstance().getAllTitles();
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async createTitle(req: express.Request, res: express.Response) {
        const data = req.body;
        const result = await TitleService.getInstance().createTitle(data);
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        if (result === ApiErrorCode.alreadyExists) {
            return res.status(409).end(); // CONFLICT
        }
        res.json(result);
    }

    async deleteTitle(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await TitleService.getInstance().deleteTitle(id);
        if (result === ApiErrorCode.notFound) {
            return res.status(404).end();
        }
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        res.status(204).end();
    }

    buildRouter(): express.Router {
        const router = express.Router(); //création d'un nouveau routeur
        router.get("/", this.getAllTitles.bind(this));
        router.get("/:id", this.getTitleById.bind(this));
        router.post("/create", this.createTitle.bind(this));
        router.delete("/:id", this.deleteTitle.bind(this));
        return router;
    }
}