import express from "express";
import cors from "cors";
import { prisma } from "./src/db/database.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check / root route
app.get("/", (_req, res) => {
  res.json({ message: "CollabIQ API running" });
});

// Routes
// app.use("/api", apiRouter);

// Graceful shutdown
async function shutdown() {
  console.log("\nShutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

export default app;
