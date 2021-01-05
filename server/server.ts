import * as express from "express";
import RestRoutes from "../routes/restRoutes";

const app = express();

export default class Server {

  constructor(private readonly _restRoutes: RestRoutes) {}

  init() {
    this.getRouters();

    app.listen(3000, () => {
        console.log("Application started on 3001 port")
    })
  }


  getRouters() {
    app.use("/rest", this._restRoutes.getRoutes())
  }
}