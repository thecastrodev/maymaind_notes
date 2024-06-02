import express from "express";
import "express-async-errors";
import { config_env } from "./utils/config";
import { errorInterceptor } from "./middlewares/errorInterceptor";
import { routes } from './routes';

import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./libs/swagger_output.json";

// Inicializando o express
const app = express();
app.use(errorInterceptor);

const port = config_env.port;
const hostname = config_env.hostname;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use(routes);

// Inicializando o servidor
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));

export { app };
