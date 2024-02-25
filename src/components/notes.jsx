import { useState } from 'react'
import '../assets/styles/notes.css'

const Notes = ({groupdata, selectedgroup}) => {
  const groupnotes = groupdata[selectedgroup].notes;
  console.log("Notes",groupdata)
  const createmessageblock = (text, time) => (
    <div className="singular-note">
      <div className='singular-note-text'>
        <p>{text}</p>
      </div>
      <div className='singular-note-time'>
        <strong>{time}</strong>
      </div>
    </div>
  );

  return (
    <>
    {groupnotes.length !== 0 ? (
      <div className="notes-block">
        {groupnotes.map(note => createmessageblock(note[0], note[1]))}
    </div>
    ) : (
      console.log("no notes")
    )}

    </>
  )
}

export default Notes
