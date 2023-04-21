import React from 'react'
import './Participant.css'
import RoboAvatar from '../RoboAvatar/RoboAvatar'

export default function Participant({participant}) {
  return (
    <div className = "Participant">
      <RoboAvatar name={participant}
        />
       {participant}
    </div>
  )
}
