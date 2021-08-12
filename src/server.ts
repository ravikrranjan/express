import http, { Server } from "http";
import express, { Express } from "express";
import { App } from "./app";
const app: Express = express();
const server: Server = http.createServer(app);
new App(app, server);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server listning on port %d`, port);
});
