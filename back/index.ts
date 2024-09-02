import { config } from "dotenv";
config(); // Permet de charger les variables d'environnement
import cors from "cors";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import path from "path";

import {
  AlbumController,
  ArtistController,
  SubsController,
  TitleController,
  UserController,
} from "./controllers";

async function startServer(): Promise<void> {
  await mongoose.connect(process.env.MONGO_URI, {
    auth: {
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
    },
  });
  const app = express();
  app.use(cors());
  app.use(
    "/music",
    express.static(path.join(__dirname, "../front/public/music"))
  ); // Correct path to music
  app.use(
    "/imgs",
    express.static(path.join(__dirname, "../front/public/imgs"))
  ); // Correct path to images

  app.use(bodyParser.json());
  app.use("/album", AlbumController.getInstance().buildRouter());
  app.use("/title", TitleController.getInstance().buildRouter());
  app.use("/user", UserController.getInstance().buildRouter());
  app.use("/sub", SubsController.getInstance().buildRouter());
  app.use("/artist", ArtistController.getInstance().buildRouter());
  app.listen(process.env.PORT, async function () {
    await bootstrap();
    console.log("Server started on port " + process.env.PORT);
  });
}

async function bootstrap(): Promise<void> {}

startServer();
