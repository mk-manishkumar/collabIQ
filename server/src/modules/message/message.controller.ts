import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as service from "./message.service.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";

/**
 * Send message
 */
export const create = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const message = await service.createMessage({ ...req.body, senderId: userId });

  return res.json(message);
});

/**
 * Get channel messages
 */
export const all = asyncHandler(async (req: Request, res: Response) => {
  const messages = await service.getMessages(String(req.params.channelId));

  return res.json(messages);
});

/**
 * Delete message
 */
export const remove = asyncHandler(async (req: Request, res: Response) => {
  await service.deleteMessage(String(req.params.id));

  return res.json({
    success: true,
  });
});
