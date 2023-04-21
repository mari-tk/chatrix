import React, { useEffect, useRef } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import ChatInputForm from '../ChatInputForm/ChatInputForm'
import './Chat.css'
import { Container } from '@mui/material'

export default function Chat({messages, user, sendMessage}) {
  const historyRef = useRef(null);
  useEffect(() => {
    console.log('HERE', historyRef);
    if (historyRef.current) {
      historyRef.current.scrollTo(0, historyRef.current.scrollHeight);
    }
  }, [messages]);

  return (
    <Container
      ref={historyRef}
      className="MessagesContainer"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100vh-64px)',
      }}
    >
      Chat Messages down below:
      {Object.keys(messages).map((message, idx) => 
        <ChatMessage key={idx} message={messages[message]} user={user}/>
      )}
      
      <div className="MessageInput">
        <ChatInputForm sendMessage={sendMessage} user={user}/>  
      </div>
    </Container>
  )
}
