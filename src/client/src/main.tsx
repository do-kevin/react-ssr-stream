import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

declare global {
  interface Window {
    assetManifest: {
      [key: string]: string;
    };
  }
}

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <App assets={window.assetManifest} />
  </React.StrictMode>
);
