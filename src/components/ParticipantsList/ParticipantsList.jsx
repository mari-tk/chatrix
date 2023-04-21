import React from 'react'
import Participant from '../Participant/Participant'
import './ParticipantsList.css'

export default function ParticipantsList({participants}) {
  return (
    <div className="ParticipantsList">Participants:
      {participants.map((participant, idx) => 
      <Participant 
        key={idx} 
        participant={participant}
      />
      )}
    </div>
  )
}
