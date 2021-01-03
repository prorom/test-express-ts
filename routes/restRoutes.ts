import * as express from "express";

const router = express.Router();

class RestRoutes {
  _controller: any;

  constructor(controller: any) {
    this._controller = controller;
  }

  getRoutes() {
    router.get("/", this._controller.getIndex.bind(this._controller));
    return router;
  }
}

module.exports = RestRoutes;