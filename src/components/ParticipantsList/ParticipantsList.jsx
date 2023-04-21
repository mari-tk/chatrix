import React from 'react'
import Participant from '../Participant/Participant'
import './ParticipantsList.css'
import { Box, Divider, List } from '@mui/material'

export default function ParticipantsList({participants}) {
  return (
    
    <List className="ParticipantsList"
    sx={{  
      padding: '20px',
      listStyle: 'none',
    }}
    >
      Online
      <Divider />
      {participants.map((participant, idx) => 

        <Participant 
          key={idx} 
          participant={participant}
        />
      )}
    </List>

  )
}
