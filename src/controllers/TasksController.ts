import { Request, Response } from "express";
import { prisma } from "../libs/prisma";

export class TasksController {
  async create(request: Request, response: Response) {
    const { title, description, state } = request.body;
    const task = await prisma.task.create({
      data: { title, description, state },
    });
    response.status(201).json(task);
  }

  async show(request: Request, response: Response) {
    const { task_id } = request.params;
    const tasks = task_id
      ? await prisma.task.findUnique({ where: { id: task_id } })
      : await prisma.task.findMany();
    response.json({ tasks });
  }

  async list(request: Request, response: Response) {
    const tasks = await prisma.task.findMany();
    response.json({ tasks });
  }

  async update(request: Request, response: Response) {
    const { task_id } = request.params;
    const { title, description, state } = request.body;
    const task = await prisma.task.update({
      where: { id: task_id },
      data: { title, description, state },
    });
    response.json(task);
  }

  async delete(request: Request, response: Response) {
    const { task_id } = request.params;
    await prisma.task.delete({ where: { id: task_id } });
    response.status(200).json({ detail: 'Task has been deleted successfully.' });
  }
}