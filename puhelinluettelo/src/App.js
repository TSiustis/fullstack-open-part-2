import React from 'react';
import YksittaisenHenkilonTiedot from './components/YksittaisenHenkilonTiedot'
import LisaaUusiHenkilo from './components/LisaaUusiHenkilo'
import RajaaNaytettavia from './components/RajaaNaytettavia'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: "0443386957"},
        { name: 'Arto Hellas2',
          number: "0443386957"},
        { name: 'Arto Järvinen',
          number: "0443386957"},
        { name: 'Teemu',
          number: "0443386957"},
        { name: 'Koira koiranen',
          number: "0443386957"},
        { name: 'Pentti esimerkkis',
          number: "0443386957"},
      ],
      newName: '',
      newNumber: '',
      filter:''
    }
  }


  addName = (event) =>{
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const result = this.state.persons.find(person => {
      return person.name === (personObject.name)
    })


   if(!result){
     const persons = this.state.persons.concat(personObject)
      this.setState({
       persons,
       newName: '',
       newNumber: '',
     })
   }
   else{
     alert("nimi on jo puhelinluettelossa")
   }
    }






  handleNameChange = (event) => {
    this.setState({ newName : event.target.value})
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber : event.target.value})
  }

  handlefilterChange = (event) => {
    this.setState({ filter : event.target.value})
  }


  render() {
    const termLowerCase = this.state.filter.toLowerCase()
    const found = this.state.persons.filter(person =>{
      if(person.name.toLowerCase().includes(termLowerCase) ){
        return person
      }
      else if(this.state.filter === ''){
        return this.state.persons
      }


    })
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <LisaaUusiHenkilo addName = {this.addName} newName = {this.state.newName} handleNameChange = {this.handleNameChange} handleNumberChange= {this.handleNumberChange} />
        <RajaaNaytettavia filter= {this.state.filter} handlefilterChange= {this.handlefilterChange}/>
        <h2>Numerot</h2>
        <div>
          {found.map(item => <YksittaisenHenkilonTiedot key={item.name} name={item.name} number={item.number} />)}
        </div>

      </div>
    )
  }
}

export default App
