import { prisma } from "../../db/database.js";

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

export const getProfile = async (clerkId: string) => {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
  });
};

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

export const deleteProfile = async (clerkId: string) => {
  return prisma.user.delete({
    where: {
      clerkId,
    },
  });
};
