import React from 'react'

export default function ChatMessage({message}) {
  console.log(message);
  return (
    <div>
      {message.userId.name} : {message.message} @ {message.createdAt}
    </div>
  )
}
