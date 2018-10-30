import React from 'react';
import Puhelinluettelo from './components/Puhelinluettelo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: 'Arto Hellas'
    }
  }


  addName = (event) =>{
    event.preventDefault()
    const nameObject = {
      name: this.state.newName
    }
    const result = this.state.persons.find(person => {
      return person.name === (nameObject.name)
    })


   if(!result){
     const persons = this.state.persons.concat(nameObject)
     console.log(persons.length)
      this.setState({
       persons,
       newName: ''
     })
   }
   else{
     alert("nimi on jo puhelinluettelossa")
   }
    }






  handleNameChange = (event) => {
    this.setState({ newName : event.target.value})
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
            <button type="submit">lisää</button>
          </div>

        </form>
        <h2>Numerot</h2>
        <div>
          {this.state.persons.map(item => <Puhelinluettelo key={item.name} name={item.name} />)}
        </div>

      </div>
    )
  }
}

export default App
