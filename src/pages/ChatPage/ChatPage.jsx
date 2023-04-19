import React from 'react'
import { useState, useEffect } from 'react';
import * as chatsAPI from '../../utilities/chats-api'
import Chat from '../../components/Chat/Chat';
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function ChatPage({user}) {
  const [socketMessage, setSocketMessages] = useState('');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setSocketMessages(data.message);
    })
  }, [socket]);

  useEffect(function() {
    async function getMessages() {
      const messages = await chatsAPI.getAllMessages();
      setMessages(messages);

    }
    getMessages();
  }, []);

  return (
    <div>
      ChatPage
      <Chat messages={messages} socket={socket} socketMessage={socketMessage} user={user}/>
      <h3>last socket message: {socketMessage}</h3>
    </div>
  )
}
