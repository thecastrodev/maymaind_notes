"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_env = void 0;
exports.config_env = {
    database_url: process.env.DATABASE_URL,
    port: Number(process.env.API_PORT) || 3333,
    hostname: process.env.API_HOST || "localhost"
};
