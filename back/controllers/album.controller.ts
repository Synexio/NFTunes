import * as express from "express";
import { AlbumService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";

import multer from "multer";
import path from "path";

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "img") {
      cb(null, path.join(__dirname, "../../front/public/album_imgs"));
    } else {
      cb(new Error("Invalid field name"), "");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Prevent filename collisions
  },
});

// Initialize multer
const upload = multer({ storage });

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

  private constructor() {}

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
    const imageFile = req.files?.["img"] ? req.files["img"][0] : null;

    const { address, name, author, titles } = req.body;

    if (!imageFile) {
      return res.status(400).json({ error: "Image is required." });
    }

    const albumData = {
      address: address || undefined,
      name,
      author,
      img: `/album_imgs/${imageFile.filename}`, // Save the path to image
      titles: Array.isArray(titles) ? titles : [titles],
    };

    const result = await AlbumService.getInstance().createAlbum(albumData);

    if (result === ApiErrorCode.invalidParameters) {
      return res.status(400).end();
    }
    if (result === ApiErrorCode.alreadyExists) {
      return res.status(409).end(); // CONFLICT
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
    router.post(
      "/create",
      upload.fields([{ name: "img" }]),
      this.createAlbum.bind(this)
    );
    router.delete("/:id", this.deleteAlbum.bind(this));
    return router;
  }
}
