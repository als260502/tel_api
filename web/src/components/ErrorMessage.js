import React, { useState } from 'react';

import './ErrorMessage.css'

const ErrorMessage = ({ msg }) => {
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <>
      {msg &&
        < div className='errMessage' >
          <span>{msg}</span>
        </div >
      }
    </>
  )

}

export default ErrorMessage;
