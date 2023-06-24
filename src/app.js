import express from "express";
import morgan from "morgan";

import authRouter from "./routes/auth.routes.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routers
app.use("/api", authRouter)

export default app;