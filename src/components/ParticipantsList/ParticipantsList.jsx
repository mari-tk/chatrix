import React from 'react'
import Participant from '../Participant/Participant'
import './ParticipantsList.css'
import { Box, Divider, List } from '@mui/material'

export default function ParticipantsList({participants}) {
  return (
    
    <List className="ParticipantsList"
    sx={{  
      bgcolor: 'background.paper', 
      padding: '20px',
      listStyle: 'none',
      bgcolor: 'background.paper' 
    }}
    >
      Online:
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
