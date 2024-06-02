import swaggerAutogen from "swagger-autogen";
import { config_env } from "../utils/config";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Library",
    description: "A simple book reservation system.",
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
  ],
  components: {
    schemas: {
      DefaultResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "message",
          },
        },
      },
      TaskRegister: {
        type: "object",
        required: ["title", "description", "state"],
        properties: {
          title: {
            type: "string",
            example: "title",
          },
          description: {
            type: "string",
            example: "description",
          },
          state: {
            type: "string",
            enum: ["pending", "doing", "done"],
            example: "pending",
          },
        },
      },
      TaskPatch: {
        type: "object",
        properties: {
          title: {
            type: "string",
            example: "title",
          },
          description: {
            type: "string",
            example: "description",
          },
          state: {
            type: "string",
            enum: ["pending", "doing", "done"],
            example: "doing",
          },
        },
      },
      TaskResponse: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "a0fbbdeb-fee6-4e58-bec7-8ef84e55a892",
          },
          title: {
            type: "string",
            example: "title",
          },
          description: {
            type: "string",
            example: "description",
          },
          state: {
            type: "string",
            enum: ["pending", "doing", "done"],
            example: "pending",
          },
          createdAt: {
            type: "string",
            format: "date",
            example: "2024-06-01",
          },
        },
      },
    },
    parameters: {
      IdBookQuery: {
        name: "id",
        in: "query",
        schema: {
          type: "string",
        },
        required: true,
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
  console.log('Swagger documentation generated successfully');
});