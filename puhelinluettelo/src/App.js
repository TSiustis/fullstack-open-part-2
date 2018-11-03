import React from 'react';

import personService from './services/persons'

import YksittaisenHenkilonTiedot from './components/YksittaisenHenkilonTiedot'
import LisaaUusiHenkilo from './components/LisaaUusiHenkilo'
import RajaaNaytettavia from './components/RajaaNaytettavia'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter:''
    }
  }
  componentDidMount() {
    console.log('did mount')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons : response})
      })
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
     personService
     .create(personObject)
          .then(newPerson => {
            this.setState({
             persons: this.state.persons.concat(newPerson),
             newName: '',
             newNumber: ''
           })
          })
   }
   else{
     alert("nimi on jo puhelinluettelossa")
   }
    }


  removePerson = (id, person) =>{
    return () => {
      console.log(`should ${id} be removed?`)
      if (window.confirm(`Haluatko varmasti poistaa ${person}`)){
        personService
        .deletePerson(id)
        .then( () => {
          personService
          .getAll()
          .then(response => {
            console.log('promise fulfilled')
            this.setState({ persons : response})
          })
        })
      }
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


    })
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <LisaaUusiHenkilo addName = {this.addName} newName = {this.state.newName} newNumber = {this.state.newNumber} handleNameChange = {this.handleNameChange} handleNumberChange= {this.handleNumberChange} />
        <RajaaNaytettavia filter= {this.state.filter} handlefilterChange= {this.handlefilterChange}/>
        <h2>Numerot</h2>
        <div>
          {found.map(item => <YksittaisenHenkilonTiedot key={item.name} name={item.name} number={item.number} removePerson = {this.removePerson(item.id, item.name)}/>)}
        </div>

      </div>
    )
  }
}

export default App
