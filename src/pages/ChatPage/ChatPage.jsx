import React from 'react'
import { useState, useEffect } from 'react';
import * as chatsAPI from '../../utilities/chats-api'
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import Chat from '../../components/Chat/Chat';

export default function ChatPage() {
  const [messages, setMessages] = useState({});

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
      <Chat messages={messages}/>
    </div>
  )
}
