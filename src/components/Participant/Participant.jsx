import React from 'react'
import './Participant.css'
import RoboAvatar from '../RoboAvatar/RoboAvatar'

export default function Participant({participant}) {
  return (
    <>
    <li className = "Participant">
      <RoboAvatar name={participant}
        />
       {participant}
    </li>
    </>
  )
}
