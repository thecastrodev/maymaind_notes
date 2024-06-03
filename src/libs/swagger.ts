import swaggerAutogen from "swagger-autogen";
import { config_env } from "../utils/config";

const doc = {
  info: {
    version: "v1.0.0",
    title: "My Tasks",
    description: "A simple task manager.",
  },
  servers: [
    {
      url: "https://mytasks-ts.onrender.com/",
      description: "Production",
    },
    {
      url: `http://${config_env.hostname}:${config_env.port}/`,
      description: "Local",
    },
  ],
  tags: [
    {
      name: "Tasks",
      description: "Endpoints related to task management",
    },
    {
      name: "Check",
      description: "Endpoints for check safety api",
    },
  ],
  components: {
    schemas: {
      DefaultResponse: {
        message: "message",
      },
      TaskRegister: {
        $title: "username",
        $description: "name",
        $state: "pending",
      },
      TaskPatch: {
        title: "username",
        description: "name",
        state: "pending",
      },
      TaskResponse: {
        $id: "a0fbbdeb-fee6-4e58-bec7-8ef84e55a892",
        $title: "username",
        $description: "name",
        $state: "pending",
        $createdAt: "year-mouth-day",
      },
    },
    parameters: {
      IdBookQuery: {
        name: "id",
        in: "query",
        schema: {
          type: "string",
        },
      },
      States: {
        name: "state",
        in: "query",
        schema: {
          type: "string",
          enum: ["pending", "doing", "done"],
        },
      },
    },
  },
};

const options = {
  openapi: "3.0.0",
  language: "pt-BR",
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../app.ts"];

swaggerAutogen(options)(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated successfully");
});
