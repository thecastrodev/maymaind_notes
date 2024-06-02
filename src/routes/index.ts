import { Router } from "express";
import { checkRoutes } from "./checkRoutes";
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use("/ping", checkRoutes);
routes.use("/tasks", taskRoutes /*
  #swagger.tags = ['Tasks']
*/);

export { routes };