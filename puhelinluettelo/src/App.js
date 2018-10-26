import React from 'react';
import Puhelinluettelo from './components/Puhelinluettelo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: 'asdas'
    }
  }


  addName = (event) =>{
    event.preventDefault()
    const nameObject = {
      name: this.state.newName
    }
    console.log('nappia painettu')
    const persons = this.state.persons.concat(nameObject)

    this.setState({
      persons: persons,
      newName: ''
    })
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
        ...
        <div>
          debug: {this.state.newName}
        </div>

      </div>
    )
  }
}

export default App
