import * as express from "express";
import RestApiController from "../controllers/restApiController";

const router = express.Router();

export default class RestRoutes {

  constructor(private _restApiController: RestApiController) {}

  getRoutes() {
    router.get("/", this._restApiController.getIndex.bind(this._restApiController));
    return router;
  }
}