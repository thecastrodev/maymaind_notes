"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TasksController_1 = require("../controllers/TasksController");
const router = express_1.default.Router();
const tasksController = new TasksController_1.TasksController();
router.get('/', tasksController.list);
router.post('/', tasksController.create);
router.get('/:task_id', tasksController.show);
router.patch('/:task_id', tasksController.update);
router.delete('/:task_id', tasksController.delete);
exports.default = router;
