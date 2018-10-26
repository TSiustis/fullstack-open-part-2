import React from 'react'
const Sisalto = (props) => {
const Displayperson = () => props.persons.map(item => <li key={item.name}>{item.name} </li>)
return(
  <div>
    <ul>
    {Displayperson()}
    </ul>
  </div>
)
}

const Puhelinluettelo = (props) => {


  return (
    <div>
      <Sisalto persons={props.persons}/>
    </div>
  )
}
export default Puhelinluettelo
