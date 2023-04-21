import React from 'react'
import RoboAvatar from '../RoboAvatar/RoboAvatar'

export default function ChatMessage({message}) {
  console.log(message);
  return (
    <div>
      <RoboAvatar name={message.userId.name}/>
      {message.userId.name} : {message.message} @ {message.createdAt}
    </div>
  )
}
