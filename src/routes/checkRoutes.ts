import { Router } from "express";
import { CheckController } from "../controllers/CheckController";

const checkController = new CheckController();
const checkRoutes = Router();

checkRoutes.get("/", checkController.ping);

export { checkRoutes };