"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorInterceptor = void 0;
const zod_1 = require("zod");
const AppError_1 = require("../errors/AppError");
function errorInterceptor(error, request, response, next) {
    if (error instanceof AppError_1.AppError) {
        response.status(error.statusCode).json({
            status: "Error",
            message: error.message,
        });
    }
    if (error instanceof zod_1.ZodError) {
        return response.status(400).json({
            status: "Validation error",
            message: error.issues,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error",
    });
}
exports.errorInterceptor = errorInterceptor;
