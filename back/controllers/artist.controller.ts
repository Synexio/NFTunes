import * as express from "express";
import {ApiErrorCode} from "../api-error-code.enum";
import {ArtistService} from "../services";

export class ArtistController {
    private static instance: ArtistController;

    public static getInstance(): ArtistController {
        if (ArtistController.instance === undefined) {
            ArtistController.instance = new ArtistController();
        }
        return ArtistController.instance;
    }

    private constructor() {
    }

    async createArtist(req: express.Request, res: express.Response) {
        const data = req.body;
        const result = await ArtistService.getInstance().createArtist(data);
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        res.json(result);
    }

    async deleteArtist(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await ArtistService.getInstance().deleteArtist(id);
        if (result === ApiErrorCode.notFound) {
            return res.status(404).end();
        }
        if (result === ApiErrorCode.invalidParameters) {
            return res.status(400).end();
        }
        res.status(204).end();
    }

    async getArtistById(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const result = await ArtistService.getInstance().getArtistById(id);
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    async getAllArtists(req: express.Request, res: express.Response) {
        const result = await ArtistService.getInstance().getAllArtists();
        if (result === null) {
            return res.status(404).end();
        }
        res.json(result);
    }

    buildRouter(): express.Router {
        const router = express.Router(); //création d'un nouveau routeur
        router.get("/", this.getAllArtists.bind(this));
        router.post("/create", this.createArtist.bind(this));
        router.get("/:id", this.getArtistById.bind(this));
        router.delete("/:id", this.deleteArtist.bind(this));
        return router;
    }
}