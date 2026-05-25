import { Workspace } from "./workspace.model.js";

/**
 * Create a new workspace
 * and assign the authenticated
 * user as the owner.
 */
export const createWorkspace = (clerkId: string, data: { name: string; description?: string }) => {
  return Workspace.create({
    name: data.name,
    description: data.description,
    ownerId: clerkId,
  });
};

/**
 * Retrieve all workspaces
 * owned by the authenticated user.
 */
export const getWorkspaces = (clerkId: string) => {
  return Workspace.find({
    ownerId: clerkId,
  });
};

/**
 * Retrieve a workspace
 * by its unique ID.
 */
export const getWorkspace = (id: string) => {
  return Workspace.findById(id);
};

/**
 * Permanently delete
 * a workspace by ID.
 */
export const deleteWorkspace = (id: string) => {
  return Workspace.findByIdAndDelete(id);
};
