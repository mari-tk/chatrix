import React from 'react'
import { useState, useEffect } from 'react';
import { getToken } from '../../utilities/users-service';
import * as chatsAPI from '../../utilities/chats-api'
import Chat from '../../components/Chat/Chat';
import io from "socket.io-client";
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';

const socket = io({
  auth: {
    token: getToken()
  },
  forceBase64: true
});

socket.on('connect_error', console.error);

export default function ChatPage({user}) {
  const [messages, setMessages] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages([...messages, data]);
    });
  });

  useEffect(() => {
    socket.emit('getActiveConnections');

    socket.on('activeConnections', (connections) => {
      setActiveConnections(connections);
      console.log(activeConnections);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

  }, []);

  useEffect(function() {
    async function getMessages() {
      setMessages(await chatsAPI.getAllMessages());
    }
    getMessages();
  }, []);

  return (
    <div>
      ChatPage
      <ParticipantsList participants={activeConnections}/>
      <Chat messages={messages} socket={socket} user={user}/>
    </div>
  )
}
