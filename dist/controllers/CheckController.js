"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckController = void 0;
class CheckController {
    async ping(_, response) {
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
exports.CheckController = CheckController;
