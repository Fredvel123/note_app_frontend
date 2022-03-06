import React, { useEffect, useState } from 'react'
// redux
import { useSelector } from 'react-redux';
// react router;
import { useParams } from 'react-router-dom';
// components
import GetOut from './GetOut'
// styles components
import { Styles } from '../../styles/Home/noteById';

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
    // getDate();
  }
  useEffect(() => {
    getNoteInfo();
  }, [])

  // const [date, setDate] = useState([])
  
  // const orderDateInfo = dateInfo => {
  //   const res = dateInfo.split('T');
  //   return res;
  // }

  // const orderHour = hourInfo => {
  //   const hour = hourInfo.split('')
  //   let res = '';
  //   for (const letter in hour) {
  //     if(letter < 5 ) {
  //       res += hour[letter];
  //     }
  //   }
  //   return res;
  // }

  // const getDate = async () => {
  //   let created = await note.createdAt;
  //   created = await orderDateInfo(created)
    
  //   created[1] =  orderHour(created[1])
  //   let updated = await note.updatedAt;
  //   updated = await orderDateInfo(updated)
  //   updated[1] = orderHour(updated[1])
  //   setDate({created, updated})
  //   console.log(date)
  // }
  
  // useEffect(() => {
  //   getDate();
  // }, [getNoteInfo])
  
  return (
    <Styles>
      <h3>{note.title}</h3>
      <h4>{note.description}</h4>
      <GetOut />
      {/* <button onClick={getDate}  >get info</button> */}
      {/* <p>Created at: {date.length > 0 ?  date.created[0] : null}, {date.length > 0 ? date.created[1] : null} </p> */}
    </Styles>
  )
}

export default NoteById;