import './btn.css'

//Usando o children ele pega oq tiver dentro do lugar q pede o btn

const Btn = (props) => {
  
  return (

    <button className='btn'>
      {props.children}
    </button>
    
  )

}

export default Btn