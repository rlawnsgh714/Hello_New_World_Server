import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("I'm working"));

export default app;
