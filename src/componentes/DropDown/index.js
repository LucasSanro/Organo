import './DropDown.css'

const DropDown = props => {
  return (
    <div className="dropDown">
      <label>{props.label}</label>

      <select
        value={props.valor}
        onChange={event =>props.alterado(event.target.value)} 
        required={props.obrigatorio}
      >
        <option value="" ></option>
        {props.itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
