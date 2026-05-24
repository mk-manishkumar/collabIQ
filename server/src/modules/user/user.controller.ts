import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as service from "./user.service.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";

/**
 * Sync Clerk user with database
 * Creates user if not already stored
 */
export const syncUser = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const email = req.body.email;

  const user = await service.createUser(userId, email);

  return res.json(user);
});

/**
 * Return current authenticated user's profile
 */
export const profile = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await service.getProfile(userId);

  return res.json(user);
});

/**
 * Update editable user profile information
 * (username, bio, fullName, avatar, etc.)
 */
export const editProfile = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await service.updateProfile(userId, req.body);

  return res.json(user);
});

/**
 * Permanently remove authenticated user
 * Deletes profile record from database
 */
export const deleteProfile = asyncHandler(async (req: Request, res: Response) => {
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
});
