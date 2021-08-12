import express, { Express, Response, Request, NextFunction } from "express";
import { Server } from "http";
import { join } from "path/posix";

export class App {
  private app: Express;
  constructor(app: Express, server: Server) {
    this.app = app;
    this._initMiddlewares();

    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.render("index");
    });
    // define you app routs here

    //
    this._initErrorHandlingMiddlewares();
  }

  private _initMiddlewares() {
    this.app.disable("x-powered-by");
    this.app.use(express.urlencoded({ extended: false, limit: "50mb" }));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.set("view engine", "pug");
    this.app.set("views", join(__dirname, "views"));
  }

  private _initErrorHandlingMiddlewares() {
    // this.app.use();
  }
}
