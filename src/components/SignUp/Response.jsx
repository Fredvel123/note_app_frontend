import React, { useState } from 'react'
// styled components
import { Icons, ResponseStyles } from '../../styles/signup/response'

function Response({ state, transition, setTrans }) {
  const closeWindow = () => {
    setTrans(false);
  }
  return (
    <ResponseStyles state={transition}  >
      <Icons onClick={closeWindow} />
      <h2>{state ? state.message  : 'it is not something'  }</h2>
    </ResponseStyles>
  )
}

export default Response;