import * as express from "express";

import * as constants from "./constants";
import * as types from "./types";


function sendJsonResponse(
  res: express.Response, code: number, body: types.RespBody
): void {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json");
  res.json(body);
}

export function index(
  req: express.Request, res: express.Response
): void {
  sendJsonResponse(
    res,
    200,
    { status: constants.RespStatus.ok, message: "Hello World" }
  );
}
