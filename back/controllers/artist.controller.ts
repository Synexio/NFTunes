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
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end();
    }
    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    res.json(result);
  }
  async getArtistByAddressAndUpdate(
    req: express.Request,
    res: express.Response
  ) {
    const address = req.params.address;
    const data = req.body;

    const result =
      await ArtistService.getInstance().getArtistByAddressAndUpdate(
        address,
        data
      );
    if (result === ApiErrorCode.notFound) {
      return res.status(404).json({ message: "Artist not found" });
    }
    if (result === ApiErrorCode.failed) {
      console.error("Failed to retrieve artist:", address);
      return res.status(500).json({ message: "Failed to retrieve artist" });
    }
    return res.json(result);
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
  async updateArtist(req: express.Request, res: express.Response) {
    const id = req.params.id;

    const data = req.body;
    const result = await ArtistService.getInstance().updateArtist(id, data);
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

  async searchArtist(req: express.Request, res: express.Response) {
    try {
      const limit = req.query.limit
        ? Number.parseInt(req.query.limit as string)
        : 20;
      const offset = req.query.offset
        ? Number.parseInt(req.query.offset as string)
        : 0;

      const artists = await ArtistService.getInstance().searchArtist({
        address: req.query.address as string,
        status: req.query.status as string,
        currentReward: req.query.currentReward as string, // There was a typo here
        limit: limit,
        offset: offset,
      });

      res.json(artists);
    } catch (error) {
      console.error("Error searching for artists:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  buildRouter(): express.Router {
    const router = express.Router(); //création d'un nouveau routeur
    router.get("/", this.getAllArtists.bind(this));
    router.get("/search", this.searchArtist.bind(this));
    router.put(
      "/address/:address",
      this.getArtistByAddressAndUpdate.bind(this)
    );
    router.post("/create", this.createArtist.bind(this));
    router.get("/:id", this.getArtistById.bind(this));
    router.delete("/:id", this.deleteArtist.bind(this));
    router.patch("/:id", this.updateArtist.bind(this));
    return router;
  }
}
