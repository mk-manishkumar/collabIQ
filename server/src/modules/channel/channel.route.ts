import { Router } from "express";

import * as controller from "./channel.controller.js";

const channelRoutes = Router();

channelRoutes.post("/", controller.create);

channelRoutes.get("/workspace/:workspaceId", controller.all);

channelRoutes.get("/:id", controller.one);

channelRoutes.delete("/:id", controller.remove);

export default channelRoutes;
