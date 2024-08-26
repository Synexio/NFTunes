import * as express from "express";
import {AlbumService} from "../services";
import {ApiErrorCode} from "../api-error-code.enum";

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

    private constructor() {
    }

    async getAlbumById(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await AlbumService.getInstance().getAlbumById(id);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async getAllAlbums(req: express.Request, res: express.Response) {
        const result = await AlbumService.getInstance().getAllAlbums();
        if (result === null) {
            return res.status(404).end();
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

    async deleteAlbum(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await AlbumService.getInstance().deleteAlbum(id);
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
        router.get("/", this.getAllAlbums.bind(this));
        router.get("/:id", this.getAlbumById.bind(this));
        router.post("/create", this.createAlbum.bind(this));
        router.delete("/:id", this.deleteAlbum.bind(this));
        return router;
    }
}
