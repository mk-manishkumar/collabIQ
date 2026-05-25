import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import { auth } from "./src/middleware/auth.middleware.js";
import { errorMiddleware } from "./src/middleware/error.middleware.js";
import userRoutes from "./src/modules/user/user.route.js";
import workspaceRoutes from "./src/modules/workspace/workspace.route.js";
import channelRoutes from "./src/modules/channel/channel.route.js";
import messageRoutes from "./src/modules/message/message.route.js";

const app = express();

// Connect DB
connectDB();

// Security
app.disable("x-powered-by");

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

// Health check
app.get("/", (_req: Request, res: Response) => {
  return res.json({ success: true, message: "CollabIQ API running" });
});

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/workspace", workspaceRoutes);
app.use("/api/v1/channel", channelRoutes);
app.use("/api/v1/message", messageRoutes);

// Global error handler
app.use(errorMiddleware);

// Start server
const PORT = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
  console.log(`Server running:http://localhost:${PORT}`);
});
