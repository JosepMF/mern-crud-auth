import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js';
import { createTask, deleteOneTask, editTask, getAllTasks, getOneTask } from '../controllers/tasks.controller.js';

const router = Router();

router.get("/", authRequired, getAllTasks)
router.get("/:id", authRequired, getOneTask)
router.post("/", authRequired, createTask)
router.delete("/", authRequired, deleteOneTask)
router.put("/", authRequired, editTask)

export default router;