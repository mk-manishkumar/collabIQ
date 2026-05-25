import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema(
  {
    name: String,

    description: String,

    ownerId: {
      type: String,
      ref: "User",
    },
  },

  {
    timestamps: true,
  },
);

export const Workspace = mongoose.model("Workspace", workspaceSchema);
