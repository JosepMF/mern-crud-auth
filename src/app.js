import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRouter from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express();

// middlewares
app.use(cors({
    origin: [
        "http://172.16.5.4:3001",
        "http://localhost:3001",
        "http://127.0.0.1:3001"
    ]
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// routers
app.use("/api", authRouter)
app.use("/api/tasks", tasksRouter)

export default app;