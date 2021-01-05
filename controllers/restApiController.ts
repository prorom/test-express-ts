import { Request, Response } from "express";
import * as path from "path";

export default class RestApiController {
  constructor() {}

  getIndex(req: Request, res: Response) {
    const options = {
      root: path.join(`${__dirname}/../`, 'public'),
    }
    return res.status(200).sendFile("index.html", options);
  }
}