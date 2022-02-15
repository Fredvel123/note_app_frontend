import React, { useEffect, useState } from 'react'
// redux
import { useSelector } from 'react-redux';
// react router;
import { useParams } from 'react-router-dom';

function NoteById() {
  const id = useParams().id;
  const auth = useSelector(state => state.auth.value);
  // get note
  const [note, setnote] = useState({});
  const getNoteInfo = async () => {
    const link = `https://notes-app-fredd.herokuapp.com/api/notes/${id}`;
    const note = await fetch(link, {
      headers: {
        'access-token': auth.token 
      }
    })
    const res = await note.json();
    setnote(res);
  }
  useEffect(() => {
    getNoteInfo();
  }, [])
  
  return (
    <div>
      <h2>This wil be the note</h2>
      <h3>{note.title}</h3>
      <h4>{note.description}</h4>

      <button onClick={getNoteInfo} >info</button>
    </div>
  )
}

export default NoteById;