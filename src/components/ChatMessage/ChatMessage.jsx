import React from 'react'

export default function ChatMessage({message}) {
  return (
    <div>
      {message.name} : {message.message} @ {message.createdAt}
    </div>
  )
}
