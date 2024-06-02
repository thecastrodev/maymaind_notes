"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const config_1 = require("./utils/config");
const errorInterceptor_1 = require("./middlewares/errorInterceptor");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./libs/swagger_output.json"));
// Inicializando o express
const app = (0, express_1.default)();
exports.app = app;
app.use(errorInterceptor_1.errorInterceptor);
const port = config_1.config_env.port;
const hostname = config_1.config_env.hostname;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
app.use(routes_1.routes);
// Inicializando o servidor
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
