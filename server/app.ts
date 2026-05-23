import express, { Request, Response } from "express";
import cors from "cors";

import { prisma } from "./src/db/database.js";
import { config } from "./src/core/config.js";
import userRoutes from "./src/modules/user/user.route.js";
import { auth } from "./src/middleware/auth.middleware.js";

const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "CollabIQ API running",
  });
});

app.get("/db-test", async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Routes
app.use("/api/v1/user", userRoutes);

export default app;
