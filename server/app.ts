import express from "express";
import cors from "cors";

import { prisma } from "./src/db/database.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "CollabIQ API running",
  });
});

app.get("/db-test", async (_, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

export default app;
