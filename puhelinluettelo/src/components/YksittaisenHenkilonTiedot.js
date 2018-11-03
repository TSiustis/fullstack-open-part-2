import React from 'react'
const YksittaisenHenkilonTiedot = ( {name, number, removePerson}) => {
  return (
    <li>{name}  {number} <button onClick={removePerson}>poista</button></li>
  )
}
export default YksittaisenHenkilonTiedot
