import express from 'express';
import { TasksController } from '../controllers/TasksController';

const router = express.Router();
const tasksController = new TasksController();

router.get('/', tasksController.list);
router.post('/', tasksController.create);
router.get('/:task_id', tasksController.show);
router.patch('/:task_id', tasksController.update);
router.delete('/:task_id', tasksController.delete);

export default router;
