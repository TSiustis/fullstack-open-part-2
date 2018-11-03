import React from 'react';

import personService from './services/persons'

import YksittaisenHenkilonTiedot from './components/YksittaisenHenkilonTiedot'
import LisaaUusiHenkilo from './components/LisaaUusiHenkilo'
import RajaaNaytettavia from './components/RajaaNaytettavia'
import Ilmoitus from './components/Ilmoitus'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter:'',
      notification: null,
      notificationStyle: ''
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
      if(person.name === (personObject.name)){
        return person
      }
      else{
        return null
      }
    })
    const changedPerson = { ...result, number: this.state.newNumber }


   if(!result){
     personService
     .create(personObject)
          .then(newPerson => {
            this.setState({
             persons: this.state.persons.concat(newPerson),
             newName: '',
             newNumber: '',
             notification: `Henkilön ${newPerson.name} lisääminen onnistui`,
             notificationStyle: 'addNotification'
           })
           setTimeout(() => {
             this.setState({notification: null})
           }, 5000)

          })
   }
   else{
     if (window.confirm(`Haluatko päivittää henkilön ${personObject.name} puhelinnumeron?`)){
       const id= result.id
       personService
       .update(id, changedPerson)
       .then(changedPerson => {
       const persons = this.state.persons.filter(p => p.id !== id)
       this.setState({
            persons: persons.concat(changedPerson),
            newName: '',
            newNumber: '',
            notification: `Henkilön ${personObject.name} numeron muokkaaminen onnistui`,
            notificationStyle: 'addNotification',
            })
      setTimeout(() => {
          this.setState({notification: null})
          }, 5000)
          })
        .catch(error =>{
          if(window.confirm(`Henkilö '${personObject.name}' on jo valitettavasti poistettu palvelimelta, lisätäänkö henkilö kuitenkin päivitetyllä puhelinnumerolla luetteloon?`)){
          personService
          .create(personObject)
               .then(newPerson => {
                 this.setState({
                  persons: this.state.persons.filter(p => p.id !== id).concat(newPerson),
                  newName: '',
                  newNumber: '',
                  notification: `Henkilön ${newPerson.name} lisääminen onnistui`,
                  notificationStyle: 'addNotification'
                })
                setTimeout(() => {
                  this.setState({notification: null})
                }, 5000)

               })
        }})
        }
      }
  }

  removePerson = (id, person) =>{
    return () => {
      if (window.confirm(`Haluatko varmasti poistaa ${person}`)){
        personService
        .deletePerson(id)
        .then( () => {
          personService
          .getAll()
          .then(response => {
            this.setState({ persons : response,
                            notification: `Henkilön ${person} poistaminen onnistui`,
                            notificationStyle: 'removeNotification'
                          })
            setTimeout(() => {
              this.setState({notification: null})
            }, 5000)

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
      else{
        return null
      }

    })
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Ilmoitus message={this.state.notification} classname={this.state.notificationStyle}/>
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
