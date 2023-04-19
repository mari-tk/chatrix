import React from 'react'
import { useState, useEffect } from 'react';

export default function ChatInputForm({socket}) {

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleChange(evt) {
    setMessage(evt.target.value);
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      socket.emit('send_message', {message} );
    } catch (e){
      console.log(e);
      setError('Message was not sent. Try again.');
    }
  }

  return (
    <div> ChatInputForm
      <div className="">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Enter your message:</label>
          <input type="text" name="message" value={message} onChange={handleChange} required />
          <button type="submit">SEND</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
