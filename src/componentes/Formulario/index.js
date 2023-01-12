import { useState } from 'react'
import Btn from '../Btn'
import CampoTexto from '../CampoTexto'
import DropDown from '../DropDown'
import './Formulario.css'


const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setcargo] = useState('')
  const [imagem, setimagem] = useState('')
  const [timao, settime] = useState('Programação')

  const formSubmit = (event) => { 
    event.preventDefault()
    //console.log("mandei o form!!", nome, cargo, imagem, timao)
    props.colaboradoresCadastrados({ nome, cargo, imagem, timao })

    setNome('')
    setcargo('')
    setimagem('')
    settime('')
  }


  return (
    <section className="form">
      <form onSubmit={formSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          alterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          alterado={valor => setcargo(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="informe o indereçoda imagem"
          valor={imagem}
          alterado={valor => setimagem(valor)}
        />
        <DropDown
          valor={timao}
          alterado={valor => settime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.time}
        />
        <Btn>Criar Card</Btn>
      </form>
    </section>
  )
}
export default Formulario
