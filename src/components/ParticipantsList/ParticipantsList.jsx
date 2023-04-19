import React from 'react'
import Participant from '../Participant/Participant'

export default function ParticipantsList({participants}) {
  return (
    <div>ParticipantsList 
      {participants.map((participant, idx) => 
      <Participant 
        key={idx} 
        participant={participant}
      />
      )}
    </div>
  )
}
