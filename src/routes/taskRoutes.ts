import express from 'express';
import { TasksController } from '../controllers/TasksController';

const router = express.Router();
const tasksController = new TasksController();

router.get('/list', 
/*
  #swagger.tags = ['Tasks']
  #swagger.responses[200] = {
    description: "Tasks retrieved successfully",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: {
            $ref: "#/components/schemas/TaskResponse"
          }
        }
      }
    }
  }
*/
tasksController.list);

router.post('/register', 
/*
  #swagger.tags = ['Tasks']
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/TaskRegister"
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: "Task created successfully",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/DefaultResponse"
        }
      }
    }
  }
*/
tasksController.create);

router.get('/show/:task_id', 
/*
  #swagger.tags = ['Tasks']
  #swagger.parameters['task_id'] = {
    name: "id",
    in: "query",
    required: true,
    schema: { type: "string" }
  }
  #swagger.responses[200] = {
    description: "Task retrieved successfully",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/TaskResponse"
        }
      }
    }
  }
*/
tasksController.show);

router.patch('/update/:task_id',
/*
  #swagger.tags = ['Tasks']
  #swagger.parameters['task_id'] = {
    name: "id",
    in: "query",
    required: true,
    schema: { type: "string" }
  }
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/TaskPatch"
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "Task updated successfully",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/TaskResponse"
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "Invalid request",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/DefaultResponse"
        }
      }
    }
  }
*/
tasksController.update);

router.delete('/delete/:task_id', 
/*
  #swagger.tags = ['Tasks']
  #swagger.parameters['task_id'] = {
    name: "id",
    in: "query",
    required: true,
    schema: { type: "string" }
  }
  #swagger.responses[200] = {
    description: "Task deleted successfully",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/DefaultResponse"
        }
      }
    }
  }
*/
tasksController.delete);

export default router;
