import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

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
  }

  return (
    <div> ChatInputForm
      <div className="">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Enter your message:</label>
          <input type="text" name="message" value={message} onChange={handleChange} required />
          <Button variant="contained" type="submit">SEND</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
