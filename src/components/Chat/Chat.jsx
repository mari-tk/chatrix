import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import ChatInputForm from '../ChatInputForm/ChatInputForm'

export default function Chat({messages}) {
  return (
    <div>
      Chat
      <div className="MessagesContainer">
        Chat Messages down below:
        {Object.keys(messages).map((message, idx) => <ChatMessage key={idx} message={messages[message]}/>)}
      </div>
      <ChatInputForm />  
    </div>
  )
}
