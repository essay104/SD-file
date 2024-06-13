import express from "express";
import { watch, edit, upload, deleteVideo } from "../Controler/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getedit).post(postedit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
