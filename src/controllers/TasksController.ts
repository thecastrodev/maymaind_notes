import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../libs/prisma";
import z from "zod";

export class TasksController {
  async create(request: Request, response: Response) {
    /*
      #swagger.tags = ['Task']
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
        content: {
          "application/json": {
            schema:{
              $ref: "#/components/schemas/DefaultResponse"
            }
          }           
        }
      }   
    */
    const bodySchema = z.object({
      title: z.string().min(3).max(255),
      description: z.string().min(3).max(255),
      state: z.enum(["pending", "doing", "done"]),
    }).strict();

    const { title, description, state } = bodySchema.parse(request.body);
    
    const task = await prisma.task.create({
      data: { title, description, state },
    });

    response.status(201).json(task);
  }

  async show(request: Request, response: Response) {
    /*
      #swagger.tags = ['Task']
      #swagger.parameters['$ref'] = [ '#/components/parameters/IdTaskQuery']
      #swagger.responses[201] = {
        content: {
          "application/json": {
            schema:{
              $ref: "#/components/schemas/TaskResponse"
            }
          }           
        }
      }   
    */
    const { task_id } = request.params;

    const task = await prisma.task.findUnique({ where: { id: task_id } });

    if (!task) {
      throw new AppError("Task not found.", 404);
    }

    response.json( task );
  }

  async list(request: Request, response: Response) {
    /*
    #swagger.tags = ['Task']
    #swagger.responses[200] = {
        content: {
          "application/json": {
            schema:{
              $ref: "#/components/schemas/TaskResponse"
            }
          }
        }
      }
    */
    const tasks = await prisma.task.findMany();

    response.json( tasks );
  }

  async update(request: Request, response: Response) {
    /*
    #swagger.tags = ['Task']
    #swagger.parameters['$ref'] = [ '#/components/parameters/IdTaskQuery'] 
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
    /*
    #swagger.responses[200] = {
        content: {
          "application/json": {
            schema:{
              $ref: "#/components/schemas/TaskResponse"
            }
          }
        }
      }
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/DefaultResponse"
          }
        }           
      }
    }
    */
    const bodySchema = z.object({
      title: z.string().min(3).max(255).nullish(),
      description: z.string().min(3).max(255).nullish(),
      state: z.enum(["pending", "doing", "done"]).nullish(),
    }).strict();

    const { task_id } = request.params;
    const { title, description, state } = bodySchema.parse(request.body);

    const task = await prisma.task.findUnique({ where: { id: task_id } });

    if (!task) {
      throw new AppError("Task not found.", 404);
    }
    
    const updateTask = await prisma.task.update({
      where: { id: task_id },
      data: { 
        // get the current value if the new value is null
        title: title ? title : task.title,
        description: description ? description : task.description, 
        state: state ? state : task.state 
      },
    });
    
    response.json(updateTask);
  }

  async delete(request: Request, response: Response) {
    /*
    #swagger.tags = ['Task']
    #swagger.parameters['$ref'] = [ '#/components/parameters/IdTaskQuery'] 
    #swagger.responses[200] = {
        content: {
          "application/json": {
            schema:{
              $ref: "#/components/schemas/DefaultResponse"
            }
          }
        }
      }
    */
    const { task_id } = request.params;

    await prisma.task.delete({ where: { id: task_id } });
    response.status(200).json({ detail: 'Task has been deleted successfully.' });
  }
}