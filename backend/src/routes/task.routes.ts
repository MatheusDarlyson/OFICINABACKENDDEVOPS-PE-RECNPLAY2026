import { Router } from "express";

const router = Router();

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

router.get("/", (req, res) => {
    res.status(200).json(tasks);
});

router.post("/", (req, res) => {
    const { title } = req.body; 

    if (!title || typeof title !== "string") {
        return res.status(400).json({
            message: "O titulo da tarefa é obrigatório"
        });
    }

    const newTask : Task = {
        id: Date.now(),
        title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

export default router;