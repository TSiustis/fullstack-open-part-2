import React from 'react'

const RajaaNaytettavia = ({filter, handlefilterChange}) =>{
  return (
    <div>
      <h3>rajaa näytettäviä</h3>
      <input value={filter}
             onChange={handlefilterChange}
         />
    </div>
)}

export default RajaaNaytettavia
