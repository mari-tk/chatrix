import React from 'react'
import RoboAvatar from '../RoboAvatar/RoboAvatar'
import { Card, CardContent, Container, Typography } from '@mui/material';
import './ChatMessage.css';

function formatDateTime(dateTimeStr) {
  const m = new Date(dateTimeStr);
  console.log(dateTimeStr);
  const date = new Date(dateTimeStr);
  const localDate = date.toLocaleString();

  const options = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    month: '2-digit',
    day: '2-digit'
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(localDate));

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
            backgroundColor: user._id === message.userId._id ? 'red' : '#1877f2',
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
