import React from 'react'

const Ilmoitus = ({ message, classname }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={classname}>
      {message}
    </div>
  )
}

export default Ilmoitus
