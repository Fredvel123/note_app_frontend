import React from 'react';
// styled components
import { GetOutStyles } from '../../styles/Home/getOut';
// React router
import { Link } from 'react-router-dom';

function GetOut() {
  return(
    <Link to='/' >
      <GetOutStyles />
    </Link>
  )
}
export default GetOut;