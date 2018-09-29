import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = ({otsikko}) => <h2>{otsikko}</h2>
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

  var kurssienLaskettuMaara = props.kurssi.osat.reduce((result, item)=>{
    return result + item.tehtavia
  }, 0)

  return (
    <div>
      <Otsikko  otsikko= {props.kurssi.nimi}/>
      <Sisalto sisalto={props.kurssi.osat}/>
      <Yhteensa yhteensa={kurssienLaskettuMaara} />
    </div>
  )
}

const App = () => {

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

  var kurssiLooppi = kurssit.map(item=>
       <Kurssi key={item.id} kurssi={item} />)
  return (
    <div>
      <h1>Opetusohjelma</h1>
      {kurssiLooppi}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
