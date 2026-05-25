import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },

    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },

    senderId: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const Message = mongoose.model("Message", messageSchema);
