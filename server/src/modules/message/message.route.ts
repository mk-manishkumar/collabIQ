import { Router } from "express";
import * as controller from "./message.controller.js";

const messageRoutes = Router();

messageRoutes.post("/", controller.create);

messageRoutes.get("/channel/:channelId", controller.all);

messageRoutes.delete("/:id", controller.remove);

export default messageRoutes;
