import React from 'react'

const LisaaUusiHenkilo = (props) => {
  return(
  <div>
<h2>Lisää uusi</h2>
<form onSubmit= {props.addName}>
  <div>
    nimi: <input value={props.newName}
                 onChange={props.handleNameChange}
          />

  </div>
  <div>
    numero: <input value={props.newNumber}
                 onChange={props.handleNumberChange}
          />
  </div>
  <div>
    <button type="submit">lisää</button>
  </div>
</form>
</div>
)}
export default LisaaUusiHenkilo
