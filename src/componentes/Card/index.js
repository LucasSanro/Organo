import './card.css'

const Card = (props) => {
  return (
    <div className="card">
      <div style={{ backgroundColor: props.corF }} className="cabecalho">
        <img src={props.img} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Card