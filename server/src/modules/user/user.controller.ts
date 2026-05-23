import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as service from "./user.service.js";

export const syncUser = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const email = req.body.email;

  const user = await service.createUser(userId, email);

  return res.json(user);
};

export const profile = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await service.getProfile(userId);

  return res.json(user);
};

export const editProfile = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await service.updateProfile(userId, req.body);

  return res.json(user);
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  await service.deleteProfile(userId);

  return res.json({
    success: true,
  });
};
