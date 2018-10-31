import React from 'react';
import Puhelinluettelo from './components/Puhelinluettelo'

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
      newName: 'Arto Hellas',
      newNumber: '0443385732',
      filter:'Arto Hellas'
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
    })
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <p>rajaa naytettavia</p>
        <input value={this.state.filter}
               onChange={this.handlefilterChange}
               />
        <h2>Lisää uusi</h2>
        <form onSubmit= {this.addName}>
          <div>
            nimi: <input value={this.state.newName}
                         onChange={this.handleNameChange}
                  />
          </div>
          <div>
            numero: <input value={this.state.newNumber}
                         onChange={this.handleNumberChange}
                  />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>




        <h2>Numerot</h2>
        <div>
          {found.map(item => <Puhelinluettelo key={item.name} name={item.name} number={item.number} />)}
        </div>

      </div>
    )
  }
}

export default App
