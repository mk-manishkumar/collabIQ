import { Channel } from "./channel.model.js";

/**
 * Create new channel
 */
export const createChannel = async (data: { name: string; description?: string; workspaceId: string; createdBy: string }) => {
  return Channel.create(data);
};

/**
 * Return all channels
 * for workspace
 */
export const getChannels = async (workspaceId: string) => {
  return Channel.find({ workspaceId });
};

/**
 * Return one channel
 */
export const getChannel = async (id: string) => {
  return Channel.findById(id);
};

/**
 * Delete channel
 */
export const deleteChannel = async (id: string) => {
  return Channel.findByIdAndDelete(id);
};
