import { Router } from "express";
import { checkRoutes } from "./checkRoutes";
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use("/ping", checkRoutes);
routes.use("/tasks", taskRoutes);

export { routes };