import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/usercontroller";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

//만약 1개의 파일에서 1개의 데이터만 출력!!
// export default

//만약 1개의 파일에서 복수의 데이터가 출력!!
//export
