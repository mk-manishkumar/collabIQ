import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
    },

    username: String,

    fullName: String,

    bio: String,

    avatarUrl: String,
  },

  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
