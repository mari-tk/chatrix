import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { getToken } from '../../utilities/users-service';
import * as chatsAPI from '../../utilities/chats-api'
import Chat from '../../components/Chat/Chat';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';
import './ChatPage.css'
import { Container } from '@mui/material';

export default function ChatPage({user}) {
  const [messages, setMessages] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);
  const socketRef = useRef();

  // This effect will create a socket only once and will not be triggered by state change.
  useEffect(() => {
    socketRef.current = io({
      auth: {
        token: getToken(),
      },
    });

    return () => {
      socketRef.current.close();
      socketRef.current = null;
    };
  }, []);

  // This effect will be updated every time messages are changed.
  useEffect(() => {
    const {current: socket} = socketRef;

    socket.on('connect', () => {
      console.log('Connected');
    });

    socket.on('connect_error', console.error);
    
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('receive_message', (data) => {
      console.log('receive_message', messages);
      setMessages([...messages, data]);
    });

    socket.on('active_connections', (connections) => {
      console.log('Active connections: ', connections);
      setActiveConnections(connections);
    });

    return () => {
      // Remove any existing listeners for socket events.
      socket.off();
    };
  }, [messages]);

  const sendMessage = (message) => {
    console.log('sendMessage', messages);
    socketRef.current.emit('send_message', { message });
  };

  const doNotGetMessagesRef = useRef(false);
  useEffect(function() {
    async function getMessages() {
      setMessages(await chatsAPI.getAllMessages());
    }
    if (!doNotGetMessagesRef.current) {
      getMessages();
    }
    return () => {
      doNotGetMessagesRef.current = true;
    };
  }, []);

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        maxHeight: 'calc(100vh - 64px)',
      }}
    >
      <ParticipantsList participants={activeConnections}/>
      <Chat messages={messages} sendMessage={sendMessage} user={user}/>
    </Container>
  )
}
