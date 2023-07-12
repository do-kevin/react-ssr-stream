import chalk from "chalk";
import cors from "cors";
import express, { Router } from "express";
import { render } from "./render.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async function (req, res) {
  render(req.url, res);
});

app.use(express.static("src/client/public"));

const server = app.listen(PORT, () => {
  console.log(
    chalk.white("Server is running on"),
    chalk.magenta(`http://locahost:${PORT}`)
  );
});

export default server;
