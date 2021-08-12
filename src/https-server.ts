import https, { Server } from "https";
import express, { Express } from "express";
import { App } from "./app";
const app: Express = express();
const server: Server = https.createServer(express());
new App(app, server);
const port = process.env.PORT || 443;
server.listen(port, () => {
  console.log(`server listning on port %d`, port);
});
