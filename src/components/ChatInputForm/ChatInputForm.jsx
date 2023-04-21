import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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
            name="text"
            label="write something..."
            type="text"
            id="password"
            value={message}
            onChange={handleChange}
          />
          {/* <input type="text" name="message"  onChange={handleChange} required /> */}
          <Button variant="contained" type="submit">SEND</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
