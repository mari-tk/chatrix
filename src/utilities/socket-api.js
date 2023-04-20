import { io } from 'socket.io-client';
import { getToken } from './users-service';

export const socket = io({
  auth: {
    token: getToken(),
  },
});
