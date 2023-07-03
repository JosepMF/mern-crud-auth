import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js';
import { createTask, deleteOneTask, editTask, getAllTasks, getOneTask } from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validatorMiddleware.js';
import { createTaskSchema } from '../schemas/taskSchema.js';

const router = Router();

router.get("/", authRequired, getAllTasks)
router.get("/:id", authRequired, getOneTask)
router.post("/", authRequired, validateSchema(createTaskSchema), createTask)
router.delete("/:id", authRequired, deleteOneTask)
router.put("/:id", authRequired, editTask)

export default router;