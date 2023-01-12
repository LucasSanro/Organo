import Card from '../Card'
import './time.css'

const Time = (props) => {
  const css={backgroundColor:props.corS}
  return (

      (props.colaboradores.length>0)&&<section className="time" style={css}>
      <h3 style={{ borderColor: props.corP }}>{props.nomeTime}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map (colaborador  => (
          <Card
            corF={props.corP}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            img={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  )
}

export default Time