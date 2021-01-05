import { Response } from "express";
import { ResponseJson } from "./types";

export default class ResponseHelper {

  static sendSuccessResponse(res: Response, data: ResponseJson = {}, status: number = 200) {
    return res.status(status).json(data).end();
  }
}