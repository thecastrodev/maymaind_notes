import { Request, Response } from "express";

export class CheckController {
  async ping(_: Request, response: Response) {
      /*
      #swagger.tags = ['Check']
      #swagger.responses[200] = {
        content: {
          "text/plain": {
            schema:{
              type: string
            }
          }           
        }
      }   
    */
    return response.status(200).send("pong\n");
  }
}