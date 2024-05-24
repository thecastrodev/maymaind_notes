import { Router } from "express";
import { checkRoutes } from "./checkRoutes";

const routes = Router();

routes.use(checkRoutes);

export { routes };