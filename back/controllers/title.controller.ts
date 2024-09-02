import * as express from "express";
import { TitleService } from "../services";
import { ApiErrorCode } from "../api-error-code.enum";
import multer from "multer";
import path from "path";

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "audio") {
      cb(null, path.join(__dirname, "../../front/public/music"));
    } else if (file.fieldname === "album_img") {
      cb(null, path.join(__dirname, "../../front/public/imgs"));
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

export class TitleController {
  private static instance: TitleController;

  public static getInstance(): TitleController {
    if (TitleController.instance === undefined) {
      TitleController.instance = new TitleController();
    }
    return TitleController.instance;
  }

  private constructor() {}

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
    // Access uploaded files
    const audioFile = req.files?.["audio"] ? req.files["audio"][0] : null;
    const imageFile = req.files?.["album_img"]
      ? req.files["album_img"][0]
      : null;

    // Access other form data
    const { address, name, author, genre, album, tokenId } = req.body;

    // Check if files were uploaded
    if (!audioFile || !imageFile) {
      return res
        .status(400)
        .json({ error: "Both audio and image files are required." });
    }

    // Prepare the data object
    const titleData = {
      address: address || undefined,
      name,
      author,
      genre,
      audio: `/music/${audioFile.filename}`,
      album_img: `/imgs/${imageFile.filename}`, // Save the path to image
      album: album || undefined,
      tokenId: tokenId ? parseInt(tokenId, 10) : undefined, // Ensure tokenId is an integer
    };

    console.log(titleData); // Log titleData for debugging

    // Call the service to create the title
    const result = await TitleService.getInstance().createTitle(titleData);

    // Handle potential errors
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
    const router = express.Router();
    router.get("/", this.getAllTitles.bind(this));
    router.get("/:id", this.getTitleById.bind(this));
    router.post(
      "/create",
      upload.fields([{ name: "audio" }, { name: "album_img" }]),
      this.createTitle.bind(this)
    ); // Add multer middleware here
    router.delete("/:id", this.deleteTitle.bind(this));
    return router;
  }
}
