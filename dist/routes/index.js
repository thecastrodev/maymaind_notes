"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const checkRoutes_1 = require("./checkRoutes");
const taskRoutes_1 = __importDefault(require("./taskRoutes"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/tasks", taskRoutes_1.default /*
#swagger.tags=["Task"]
*/);
routes.use("/ping", checkRoutes_1.checkRoutes);
