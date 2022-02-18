import React from 'react';
// styled components
import { ModalWindowStyles } from '../../styles/Home/modalWindow'

function ModalWindow({data, userId, setOpen, callback}) {
  // close modal window
  const modalWindow = () => {
    setOpen({...data, open: false})
  }

  return (
    <ModalWindowStyles open={data.open}>
      <h3>Are you sure you want to remove this note? "{data.title}" </h3>
      <div className='buttons' >
        <button onClick={modalWindow} >Cancel</button>
        <button onClick={() => callback(userId)} >Of corse</button>
      </div>
    </ModalWindowStyles>
  )
}

export default ModalWindow