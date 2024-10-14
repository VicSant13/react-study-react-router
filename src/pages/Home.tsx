import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  
  const navigate = useNavigate()
  return (
    <>
    <div>Hola mundo! componente Home.tsx</div>
    <button onClick={()=> navigate('/products')}>Enviar</button>
    </>
  )
}

export default Home