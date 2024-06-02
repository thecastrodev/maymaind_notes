import { Router } from "express";
import { checkRoutes } from "./checkRoutes";
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use("/tasks", taskRoutes/*
#swagger.tags=["Task"]
*/);
routes.use("/ping", checkRoutes);

export { routes };