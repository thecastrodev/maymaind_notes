import { Request, Response, Router } from "express";
import { CheckController } from "../controllers/CheckController";

const checkController = new CheckController();
const checkRoutes = Router();

checkRoutes.get("/ping", 
  /*
    #swagger.tags = ['Check']
    #swagger.responses[200] = {
      content: {
        "text/plain": {
          "schema": {
            "type": "string"
          }
        }           
      }
    }   
  */
  checkController.ping);

export { checkRoutes };