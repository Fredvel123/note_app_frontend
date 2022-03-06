import React, { useState, useEffect } from 'react';
// react router dom
import { useParams } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// styled components
import { Form, Title } from '../../styles/editTasks';
import GetOut from '../Home/GetOut';

function EditTask() {
  const id = useParams().id;
  const auth = useSelector(state => state.auth.value);
  // get note
  const [note, setnote] = useState({});
  const [edit, setEdit] = useState({})
  const getNoteInfo = async () => {
    const link = `https://notes-app-fredd.herokuapp.com/api/notes/${id}`;
    const note = await fetch(link, {
      headers: {
        'access-token': auth.token 
      }
    })
    const res = await note.json();
    setnote(res);
    setEdit({
      title: res.title,
      description: res.description
    })
  }
  useEffect(() => {
    getNoteInfo();
  }, [])
  // code inputs
  const handlertitle = e => {
    setEdit({...edit, title: e.target.value})
  }
  const handlerDescription  = e => {
    setEdit({...edit, description: e.target.value})
  }
  const handlerSubmit = e => {
    e.preventDefault();
    if(note.title !== edit.title || note.description !== edit.description) {
      updateNote();
    }else {
      setmessage({message: 'Edit Something in your note'})
    }
  }
  const [message, setmessage] = useState(null);
  const updateNote = async () => {
    const link = `https://notes-app-fredd.herokuapp.com/api/notes/update/${id}`
    const noteUpdate = await fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'access-token': auth.token
      }, 
      body: JSON.stringify({
        "title":  edit.title,
        "description": edit.description,
        "user": note.user
      })
    })
    const res = await noteUpdate.json();
    setmessage(res);
  }
  return(
    <>
      <Title>Edit note</Title>
      <Form action="" onSubmit={handlerSubmit} >
        <label htmlFor="title">
          <span>title:</span>
          <input
            id='title'
            type="text"
            placeholder='title'
            value={edit.title}
            onChange={handlertitle} />
        </label>
        <label htmlFor="description">
          <span>description:</span>
          <input
            id='description'
            type="text"
            placeholder='description'
            value={edit.description}
            onChange={handlerDescription} />
        </label>
        <button>send indo</button>
        {message === null ?
          <h3>Please, edit your note here</h3>
        : <h3>Your note was edited successfully</h3> }
      <GetOut />
      </Form>
    </>
  )
}

export default EditTask;