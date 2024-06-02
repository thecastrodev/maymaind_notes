"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoutes = void 0;
const express_1 = require("express");
const CheckController_1 = require("../controllers/CheckController");
const checkController = new CheckController_1.CheckController();
const checkRoutes = (0, express_1.Router)();
exports.checkRoutes = checkRoutes;
checkRoutes.get("/", checkController.ping);
