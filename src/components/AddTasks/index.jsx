import React, { useEffect, useState } from 'react'
// components
import Input from './Input';
// redux
import { useSelector } from 'react-redux';
import { Form, Mes, Title } from '../../styles/addTasks';
import GetOut from '../Home/GetOut';

function AddTasks() {
  // redux
  const auth = useSelector(state => state.auth.value);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  const [ident, setId] = useState('')
  const getUserInfo = async () => {
    const link = 'https://notes-app-fredd.herokuapp.com/api/users/info';
    const userInfo = await fetch(link, {
      headers: {
        'access-token': auth.token
      }
    })
    const res = await userInfo.json();
    setId(res._id);
  }
  useEffect(() => {
    getUserInfo();
  }, [])
  const [resNote, setResNote] = useState(null);
  const addNewNote = async () => {
    const link = 'https://notes-app-fredd.herokuapp.com/api/notes/add';
    const note = await fetch(link,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access-token': auth.token
      },
      body: JSON.stringify({
        "title": title,
        "description": desc,
        "user": ident
      })
    });
    const res = await note.json();
    setResNote(res);

  }

  const handlerSubmit = e => {
    e.preventDefault();
    addNewNote();
  }
  return (
    // https://notes-app-fredd.herokuapp.com/api/notes/add
    <>
      <Title>Create a New Note</Title>
      <Form action="" onSubmit={handlerSubmit} >
        <Input
          placeholder='Title of your note'
          title='title'
          state={title}
          setState={setTitle} />
        <Input
          placeholder='description of your note'
          title='description'
          state={desc}
          setState={setDesc} />
      <button>add Note</button>
      </Form> 
      {
        resNote !== null ?
        <Mes>Your note was added successfully</Mes>
      : <Mes>Write your note here please </Mes> }
      {/* <button onClick={() => console.log(resNote) }  >dasd</button> */}
      <GetOut />
    </>
  )
}

export default AddTasks;