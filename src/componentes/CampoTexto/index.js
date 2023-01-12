import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
 
 

 const change = (event) => {
    props.alterado(event.target.value)
  }

  return (
    <div className="textCamp">
      <label htmlFor="#">{props.label}</label>
      <input value={props.valor} onChange={change} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto
