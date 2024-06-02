import swaggerAutogen from "swagger-autogen";
import { config_env } from "../utils/config";

const doc = {
  info: {
    version: "v1.0.0",
    title: "My Tasks",
    description: "A simple task management system.",
  },
  servers: [
    {
      url: "https://mytasks-ts.onrender.com/",
      description: "Production"
    },
    {
      url: `http://${config_env.hostname}:${config_env.port}/`,            
      description: "Local"
    },
  ],
  tags: [
    {
      name: "Task",
      description: "",
    }
  ],
  components: {
    schemas: {
      DefaultResponse:{
        message: "message"
      },
      TaskRegister: {
        $title: "title",
        $description: "description",
        $state: "pending",
      },
      TaskResponse:{
        $id: "a0fbbdeb-fee6-4e58-bec7-8ef84e55a892",
        $title: "title",
        $description: "description",
        $state: "pending",
        $createdAt: "year-mouth-day",
      }
    },
    parameters: {
      IdTaskQuery:{
        name: "id",
        in: "query",
        schema: {
          type: "string",
        },
      }
    }
  }
};

const options = {
  openapi: "3.0.0",
  language: "pt-BR",
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../app.ts"];

swaggerAutogen(options)(outputFile, endpointsFiles, doc);