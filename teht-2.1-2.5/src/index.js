import React from 'react'
import ReactDOM from 'react-dom'

//const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = ({otsikko}) => <h1>{otsikko}</h1>
const Sisalto = (props) => {
  //const [osa1, osa2, osa3] = {sisalto}
  //kesken
  const osat = () => props.sisalto.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
  return(
    <div>
      <ul>
      {osat()}
      </ul>
    </div>
  )
}
/*
const Yhteensa = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat

  return(
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}*/

const Kurssi = (props) => {
  return (
    <div>
    <Otsikko  otsikko= {props.kurssi.nimi}/>
    <Sisalto sisalto={props.kurssi.osat}/>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
