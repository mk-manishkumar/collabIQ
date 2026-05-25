import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },

    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },

    createdBy: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const Channel = mongoose.model("Channel", channelSchema);
