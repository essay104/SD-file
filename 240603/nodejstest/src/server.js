import express from "express";
import morgan from "morgan";
import globalRouter from "./Router/globerRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";

const PORT = 4000;

console.log(process.cwd());

const app = express();
const morganMiddleWare = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morganMiddleWare);
app.use(express.urlencoded({extended: true}))
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/vidoe", videoRouter);

const handleLogin = (req, res) => {
  return res.send("welcome to the Private Lounge!");
};

const handleJoin = (req, res, next) => {
  return res.send("Here is Join");
};

app.get("/", handleHome);
app.use(middleWare);
app.get("/protected", handleProtected);

const handleListening = () => {
  console.log(`Server listening on Port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
