import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = ({otsikko}) => <h1>{otsikko}</h1>
const Sisalto = (props) => {

  const osat = () => props.sisalto.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
  return(
    <div>
      <ul>
      {osat()}
      </ul>
    </div>
  )
}

const Yhteensa = (props) => {

  return(
    <p>Yhteensä {props.yhteensa} tehtävää</p>
  )
}

const Kurssi = (props) => {
  return (
    <div>
    <Otsikko  otsikko= {props.kurssi.nimi}/>
    <Sisalto sisalto={props.kurssi.osat}/>
    <Yhteensa yhteensa={props.kurssienMaara} />
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
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
  var kurssienLaskettuMaara = kurssi.osat.reduce((result, item)=>{
    return result + item.tehtavia
  }, 0)
  return (
    <div>
      <Kurssi kurssi={kurssi} kurssienMaara={kurssienLaskettuMaara} />
      <ul>{kurssit.map(item=><Kurssi key={item.id} kurssi={item} kurssienMaara={kurssienLaskettuMaara} />)}</ul>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
