import { prisma } from "../../db/database.js";

/**
 * Create new workspace
 * Assign authenticated user as workspace owner
 */
export const createWorkspace = async (
  clerkId: string,

  data: {
    name: string;
    description?: string;
  },
) => {
  return prisma.workspace.create({
    data: {
      name: data.name,

      description: data.description,

      ownerId: clerkId,
    },
  });
};

/**
 * Return all workspaces owned by current user
 */
export const getWorkspaces = async (clerkId: string) => {
  return prisma.workspace.findMany({
    where: {
      ownerId: clerkId,
    },
  });
};

/**
 * Fetch single workspace details using workspace ID
 */
export const getWorkspace = async (id: string) => {
  return prisma.workspace.findUnique({
    where: {
      id,
    },
  });
};

/**
 * Permanently delete workspace
 * Removes workspace record from database
 */
export const deleteWorkspace = async (id: string) => {
  return prisma.workspace.delete({
    where: {
      id,
    },
  });
};
