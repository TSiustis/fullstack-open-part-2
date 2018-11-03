import React from 'react'

const Ilmoitus = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="notification">
      {message}
    </div>
  )
}

export default Ilmoitus
