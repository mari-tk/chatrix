import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { getToken } from '../../utilities/users-service';
import * as chatsAPI from '../../utilities/chats-api'
import Chat from '../../components/Chat/Chat';
import io from "socket.io-client";
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';

// const socket = io({
//   auth: {
//     token: getToken()
//   }
// });

// socket.on('connect_error', console.error);

export default function ChatPage({user}) {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);

  useEffect(() => {
    socket.current = io({
      auth: {
        token: getToken()
      }
    });
    
    socket.current.on('connect_error', console.error);
  })

  useEffect(() => {
    socket.current.on('receive_message', (data) => {
      setMessages([...messages, data]);
    });
  });

  useEffect(() => {
    socket.current.emit('get_active_connections');

    socket.current.on('active_connections', (connections) => {
      setActiveConnections(connections);
      console.log(activeConnections);
    });

    socket.current.on('disconnect', () => {
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
