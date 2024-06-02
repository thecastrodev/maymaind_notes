"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const AppError_1 = require("../errors/AppError");
const prisma_1 = require("../libs/prisma");
const zod_1 = __importDefault(require("zod"));
class TasksController {
    async create(request, response) {
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
        const bodySchema = zod_1.default.object({
            title: zod_1.default.string().min(3).max(255),
            description: zod_1.default.string().min(3).max(255),
            state: zod_1.default.enum(["pending", "doing", "done"]),
        }).strict();
        const { title, description, state } = bodySchema.parse(request.body);
        const task = await prisma_1.prisma.task.create({
            data: { title, description, state },
        });
        response.status(201).json(task);
    }
    async show(request, response) {
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
        const task = await prisma_1.prisma.task.findUnique({ where: { id: task_id } });
        if (!task) {
            throw new AppError_1.AppError("Task not found.", 404);
        }
        response.json(task);
    }
    async list(request, response) {
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
        const tasks = await prisma_1.prisma.task.findMany();
        response.json(tasks);
    }
    async update(request, response) {
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
        const bodySchema = zod_1.default.object({
            title: zod_1.default.string().min(3).max(255).nullish(),
            description: zod_1.default.string().min(3).max(255).nullish(),
            state: zod_1.default.enum(["pending", "doing", "done"]).nullish(),
        }).strict();
        const { task_id } = request.params;
        const { title, description, state } = bodySchema.parse(request.body);
        const task = await prisma_1.prisma.task.findUnique({ where: { id: task_id } });
        if (!task) {
            throw new AppError_1.AppError("Task not found.", 404);
        }
        const updateTask = await prisma_1.prisma.task.update({
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
    async delete(request, response) {
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
        await prisma_1.prisma.task.delete({ where: { id: task_id } });
        response.status(200).json({ detail: 'Task has been deleted successfully.' });
    }
}
exports.TasksController = TasksController;
