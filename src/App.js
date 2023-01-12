import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Footer from './componentes/Footer'


function App() {

  const time = [
    {
      nome: 'Programação',
      corP: '#57C278',
      corS: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corP: '#82CFFA',
      corS: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corP: '#A6D157',
      corS: '#F0F8E2'
    },
    {
      nome: 'Back-end',
      corP: '#DB6EBF',
      corS: '#FAE9F5'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])
  
  const aonovocolaboradorCadastrado = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        time={time.map(time => time.nome)}
        colaboradoresCadastrados={colaborador =>
          aonovocolaboradorCadastrado(colaborador)
        }
      />
      {time.map(time => (
        <Time
          key={time.nome}
          nomeTime={time.nome}
          corP={time.corP}
          corS={time.corS}
          colaboradores={colaboradores.filter(colaborador=>colaborador.timao === time.nome)}
        />
      ))}
      <Footer/>
    </div>
  )
}

export default App
