import { Message } from "./message.model.js";

/**
 * Send message
 */
export const createMessage = async (data: { content: string; channelId: string; senderId: string }) => {
  return Message.create(data);
};

/**
 * Get all messages
 * in channel
 */
export const getMessages = async (channelId: string) => {
  return Message.find({ channelId }).sort({ createdAt: 1 });
};

/**
 * Delete message
 */
export const deleteMessage = async (id: string) => {
  return Message.findByIdAndDelete(id);
};
