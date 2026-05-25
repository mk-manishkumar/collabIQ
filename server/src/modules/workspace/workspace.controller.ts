import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as service from "./workspace.service.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";

/**
 * Create new workspace
 * Current authenticated user becomes workspace owner
 */
export const create = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const workspace = await service.createWorkspace(userId, req.body);

  return res.json(workspace);
});

/**
 * Return all workspaces owned by authenticated user
 */
export const all = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  const workspaces = await service.getWorkspaces(userId);

  return res.json(workspaces);
});

/**
 * Fetch single workspace details using workspace ID
 */
export const one = asyncHandler(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const workspace = await service.getWorkspace(id);

  return res.json(workspace);
});

/**
 * Permanently remove workspace
 * Deletes workspace record from database
 */
export const remove = asyncHandler(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  await service.deleteWorkspace(id);

  return res.json({ success: true });
});
