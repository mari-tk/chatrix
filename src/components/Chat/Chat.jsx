import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import ChatInputForm from '../ChatInputForm/ChatInputForm'
import './Chat.css'

export default function Chat({messages, user, sendMessage}) {
  return (
    <>
      <div className="MessagesContainer">
        Chat Messages down below:
        {Object.keys(messages).map((message, idx) => <ChatMessage key={idx} message={messages[message]}/>)}
      
        <div className="MessageInput">
          <ChatInputForm sendMessage={sendMessage} user={user}/>  
        </div>
      </div>
    </>
  )
}
