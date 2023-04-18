import React from 'react'
import { useState, useEffect } from 'react';
import * as chatsAPI from '../../utilities/chats-api'
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import Chat from '../../components/Chat/Chat';
import {io} from 'socket.io-client'

export default function ChatPage({time}) {
  const [messages, setMessages] = useState({});
  const socket = io();
  console.log(socket);



  useEffect(function() {
    async function getMessages() {
      const messages = await chatsAPI.getAllMessages();
      setMessages(messages);
      socket.emit('hello');
    }
    getMessages();
  }, []);

  return (
    <div>
      {time}
      ChatPage
      <Chat messages={messages}/>
    </div>
  )
}
