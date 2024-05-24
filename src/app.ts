import express from "express";
import { config_env } from "./config";
import { routes } from './routes';

// Inicializando o express
const app = express();

const port = config_env.port;
const hostname = config_env.hostname;

// Middlewares
app.use(express.json());
app.use(routes);

// Inicializando o servidor
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));

export { app };