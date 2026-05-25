import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as service from "./channel.service.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";

/**
 * Create new channel
 * inside workspace
 */
export const create = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const channel = await service.createChannel({ ...req.body, createdBy: userId });

  return res.json(channel);
});

/**
 * Return all channels
 * for workspace
 */
export const all = asyncHandler(async (req: Request, res: Response) => {
  const channels = await service.getChannels(String(req.params.workspaceId));

  return res.json(channels);
});

/**
 * Return one channel
 */
export const one = asyncHandler(async (req: Request, res: Response) => {
  const channel = await service.getChannel(String(req.params.id));

  return res.json(channel);
});

/**
 * Delete channel
 */
export const remove = asyncHandler(async (req: Request, res: Response) => {
  await service.deleteChannel(String(req.params.id));
  
  return res.json({ success: true });
});
