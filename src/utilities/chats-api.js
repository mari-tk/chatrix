import sendRequest from './send-request';
const BASE_URL = '/api/chats';

export function sendMessage(message) {
  return sendRequest(BASE_URL, 'POST', {message});
}

export function getAllMessages() {
  return sendRequest(BASE_URL, 'GET');
}
