import { Router } from "express";
import * as controller from "./user.controller.js";

const userRoutes = Router();

userRoutes.post("/sync-user", controller.syncUser);

userRoutes.get("/profile", controller.profile);

userRoutes.patch("/profile", controller.editProfile);

userRoutes.delete("/profile", controller.deleteProfile);

export default userRoutes;
