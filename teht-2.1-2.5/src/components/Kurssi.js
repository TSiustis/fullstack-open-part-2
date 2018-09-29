import React from 'react'

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

export default Kurssi
