import TaskModel from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();

        res.status(200).json({ msg: "tasks was found", tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getOneTask = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);

        if (!task) return res.status(404).json({ msg: "task doesn't found" })

        res.status(200).json({ msg: "tasks was found", task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const taskCreated = new TaskModel({ title, description });

        const taskSaved = await taskCreated.save();

        res.status(201).json({ msg: "task created successfuly", taskSaved })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export const deleteOneTask = async (req, res) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id);

        res.status(200).json({ msg: "tasks was deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const editTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const editTask = TaskModel.findByIdAndUpdate(req.params.id, {title, description});

        res.status(201).json({ msg: "task was edited successfuly", editTask })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}