import express from "express";
import "express-async-errors";
import { errorInterceptor } from "./middlewares/errorInterceptor";
import { config_env } from "./utils/config";
import { routes } from './routes';

import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./libs/swagger_output.json";

import cors from "cors";

// Inicializando o express
export const app = express();
app.use(errorInterceptor);

const port = config_env.port;
const hostname = config_env.hostname;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

// Inicializando o servidor
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
