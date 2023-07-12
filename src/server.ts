import chalk from "chalk";
import cors from "cors";
import express, { Router } from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "success",
  });
});

app.use(router);

const server = app.listen(PORT, () => {
  console.log(
    chalk.white("Server is running on"),
    chalk.magenta(`http://locahost:${PORT}`)
  );
});

export default server;
