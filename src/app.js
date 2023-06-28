import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'

import authRouter from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// routers
app.use("/api", authRouter)
app.use("/tasks", tasksRouter)

export default app;