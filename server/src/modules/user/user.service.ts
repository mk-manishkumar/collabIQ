import { prisma } from "../../db/database.js";

/**
 * Create new user after Clerk signup
 * If user already exists, return existing record
 */
export const createUser = async (clerkId: string, email: string) => {
  return prisma.user.upsert({
    where: {
      clerkId,
    },

    update: {},

    create: {
      clerkId,
      email,
    },
  });
};

/**
 * Fetch current authenticated user's profile
 */
export const getProfile = async (clerkId: string) => {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
  });
};

/**
 * Update editable profile fields
 * (username, bio, full name, etc.)
 */
export const updateProfile = async (
  clerkId: string,

  data: {
    username?: string;
    bio?: string;
    fullName?: string;
  },
) => {
  return prisma.user.update({
    where: {
      clerkId,
    },

    data,
  });
};

/**
 * Permanently delete user profile
 * Removes user record from database
 */
export const deleteProfile = async (clerkId: string) => {
  return prisma.user.delete({
    where: {
      clerkId,
    },
  });
};
