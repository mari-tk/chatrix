import React from 'react'
import Participant from '../Participant/Participant'
import './ParticipantsList.css'

export default function ParticipantsList({participants}) {
  return (
    <ul className="ParticipantsList">Participants:
      {participants.map((participant, idx) => 

        <Participant 
          key={idx} 
          participant={participant}
        />
      )}
    </ul>
  )
}
