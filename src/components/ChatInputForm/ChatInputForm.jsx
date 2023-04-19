import React from 'react'
import { useState, useEffect } from 'react';
import * as chatsService from '../../utilities/chats-service';

export default function ChatInputForm({user, socket}) {

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
      const sentMessage = await chatsService.sendMessage(message);
      // socket.emit('join_main_room');
      socket.emit('send_message', {message: message, user: user} );
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
