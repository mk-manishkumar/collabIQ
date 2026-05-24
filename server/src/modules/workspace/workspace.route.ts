import { Router } from "express";

import * as controller from "./workspace.controller.js";

const workspaceRoutes = Router();

workspaceRoutes.post("/", controller.create);

workspaceRoutes.get("/", controller.all);

workspaceRoutes.get("/:id", controller.one);

workspaceRoutes.delete("/:id", controller.remove);

export default workspaceRoutes;
