import React from 'react'
import { useState, useEffect } from 'react';
import { getToken } from '../../utilities/users-service';
import * as chatsAPI from '../../utilities/chats-api'
import Chat from '../../components/Chat/Chat';
import io from "socket.io-client";

const socket = io({
  auth: {
    token: getToken()
  }
});

socket.on('connect_error', console.error);

export default function ChatPage({user}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages([...messages, data]);
    })
  });

  useEffect(function() {
    async function getMessages() {
      setMessages(await chatsAPI.getAllMessages());
    }
    getMessages();
  }, []);

  return (
    <div>
      ChatPage
      <Chat messages={messages} socket={socket} user={user}/>
    </div>
  )
}
