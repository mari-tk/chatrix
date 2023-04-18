import React from 'react'

export default function ChatMessage({message}) {
  return (
    <div>
      {message.userId} : {message.message} @ {message.createdAt}
    </div>
  )
}
