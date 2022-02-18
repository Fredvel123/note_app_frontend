import React, { useEffect, useState } from 'react'
// redux
import { useSelector } from 'react-redux';
// icons
import { LinkOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
// react router
import { Link } from 'react-router-dom';
// components
import ModalWindow from './ModalWindow';


function Notes() {
  const auth = useSelector(state => state.auth.value);
  const [user, setuser] = useState({});
  const getUserInfo = async () => {
    const link = 'https://notes-app-fredd.herokuapp.com/api/users/info';
    const user = await fetch(link, {
      headers: {
        'access-token': auth.token
      }
    })
    const res = await user.json();
    setuser(res);
    // getNotesByUser();
  } 
  // code to get notes by user
  const [notes, setNotes] = useState([])
  const getNotesByUser = async () => {
      const url = `https://notes-app-fredd.herokuapp.com/api/notes/user/${user._id}`
      const notes = await fetch(url, {
        headers: {
          'access-token': auth.token
        }
      });
    const res = await notes.json();
    setNotes(res);
  }
  useEffect(() => {
    getUserInfo();
  }, [])
  
  useEffect(() => {
    getNotesByUser();
  }, [getUserInfo])
  // open modal window
  const [data, setData] = useState({open: false}); 
  const openModalWindow = userData => {
    setData({open: true, id: userData._id, title: userData.title});
    // console.log(data);
  }
  // remove note
  const removeNoteById = async id => {
    const link = `https://notes-app-fredd.herokuapp.com/api/notes/remove/${id}`;
    const note = await fetch(link, {
      method: 'DELETE',
      headers: {
        'access-token': auth.token
      }      
    });
    const res = await note.json();
    // console.log(res); 
    setData({open: false});
  }

  return (
    <>
      <h2>Here will be the notes. </h2>

      {notes.length > 0 ?
        notes.map(item => (
          <div key={item._id} >
          <h2>{item.title}</h2>
          {/* <h3>{item.description}</h3> */}
          <Link to={`edit/${item._id}`}>
            <EditOutlined />
          </Link>
          <DeleteOutlined onClick={() => openModalWindow(item)} />
          <Link to={`${item._id}`} >
            <LinkOutlined />
          </Link>
        </div>
        ))
      : <h3>You have no notes yet!</h3> }

      {/* <button onClick={() => console.log(notes) } >user</button> */}
    <ModalWindow data={data} userId={data.id} setOpen={setData} callback={removeNoteById} />
    </>
  )
}

export default Notes;