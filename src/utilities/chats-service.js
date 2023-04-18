import * as chatsAPI from './chats-api';

export async function sendMessage(message) {
  return await chatsAPI.sendMessage(message);
}

export async function getAllMessages() {
  const message = await chatsAPI.getAllMessages();
  return message;
}
