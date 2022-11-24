import React from 'react'

function Button({ addUserHandle, children }) {
  return (
    <button className='button' onClick={addUserHandle}>
      {children}
    </button>
  )
}

export default Button
