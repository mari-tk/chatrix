import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import './ChatInputForm.css'
import { TextField } from '@mui/material';

export default function ChatInputForm({sendMessage}) {

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleChange(evt) {
    setMessage(evt.target.value);
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    sendMessage(message);
    setMessage('');
  }

  return (
    <div>
      <div className="">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="write something..."
            type="text"
            value={message}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">SEND</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
