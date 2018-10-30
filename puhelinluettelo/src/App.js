import React from 'react';
import Puhelinluettelo from './components/Puhelinluettelo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: "0443386957"}
      ],
      newName: 'Arto Hellas',
      newNumber: '0443385732'
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



  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
          {this.state.persons.map(item => <Puhelinluettelo key={item.name} name={item.name} number={item.number} />)}
        </div>

      </div>
    )
  }
}

export default App
