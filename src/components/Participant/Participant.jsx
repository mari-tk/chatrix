import React from 'react'
import './Participant.css'
import RoboAvatar from '../RoboAvatar/RoboAvatar'
import { ListItem } from '@mui/material'

export default function Participant({participant}) {
  return (

    <ListItem className = "Participant">
      <RoboAvatar name={participant}
        />
       {participant}
    </ListItem>

  )
}
