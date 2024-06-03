import { Request, Response } from "express";

export class CheckController {
  async ping(_: Request, response: Response) {
    response.status(200).send("pong\n");
  }
}