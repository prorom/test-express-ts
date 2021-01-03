import * as express from "express";

const app = express();

class Server {
  _restRoutes: any;

  constructor(restRoutes: any) {
    this._restRoutes = restRoutes;
  }

  init() {
    this.getRouters();

    app.listen(3000, () => {
        console.log(`Example app listening at http://localhost:3000`)
    })
  }


  getRouters() {
    app.use("/rest", this._restRoutes.getRoutes())
  }
}

module.exports = Server;