import { User } from "./user.model.js";

/**
 * Create a new user after Clerk authentication.
 * Returns the existing user if already registered.
 */
export const createUser = async (clerkId: string, email: string) => {
  const existingUser = await User.findOne({ clerkId });

  if (existingUser) return existingUser;

  return User.create({ clerkId, email });
};

/**
 * Retrieve the authenticated user's profile.
 */
export const getProfile = (clerkId: string) => {
  return User.findOne({ clerkId });
};

/**
 * Update editable profile information.
 */
export const updateProfile = (
  clerkId: string,
  data: {
    username?: string;
    bio?: string;
    fullName?: string;
    avatarUrl?: string;
  },
) => {
  return User.findOneAndUpdate({ clerkId }, data, { new: true });
};

/**
 * Delete the authenticated user's profile permanently.
 */
export const deleteProfile = (clerkId: string) => {
  return User.findOneAndDelete({ clerkId });
};
