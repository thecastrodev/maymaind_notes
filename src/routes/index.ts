import { Router } from "express";
import { checkRoutes } from "./checkRoutes";
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use("/check", checkRoutes);
routes.use("/tasks", taskRoutes);

export { routes };