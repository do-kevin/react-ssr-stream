import { Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import { App } from "./client/src/App.js";

let assets = {
  "index.css": "/index.css",
};

export const render = (url: unknown, res: Response) => {
  res.socket?.on("error", (error: any) => console.log("Fatal", error));

  let didError = false;

  const stream = renderToPipeableStream(<App assets={assets} />, {
    bootstrapScripts: [],
    onShellReady() {
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      stream.pipe(res);
    },
    onError(error) {
      didError = true;
      console.log(error);
    },
  });
};
