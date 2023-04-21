import React from 'react'
import RoboAvatar from '../RoboAvatar/RoboAvatar'
import { Card, CardContent, Container, Typography } from '@mui/material';
import './ChatMessage.css';

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', day: 'numeric', month: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  
  return formattedDate
}

export default function ChatMessage({message, user}) {
  return (
    <div className="ChatMessage">
      <div className="avatar">
        <RoboAvatar name={message.userId.name} />
      </div>
      <div className="content">
        <Typography variant="body2">
          {message.userId.name}
        </Typography>
        <Card
          raised
          sx={{
            backgroundColor: user._id === message.userId._id ? '#adadad' : '#1877f2',
            color: 'white',
            marginBottom: '10px',
          }}>
            <CardContent>
              {message.message}
            </CardContent>
        </Card>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
          {formatDateTime(message.createdAt)}
        </Typography>
      </div>
    </div>
  )
}
