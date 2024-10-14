
import { Link, NavLink, Outlet } from 'react-router-dom'

type Props = {}

function Layout({}: Props) {
  return (
    <>
    {/** SIRVE PARA DIBUJAR UNA SOMBRA SOBRE EL ELEMENTO ACTIVO */}
        <NavLink className={({isActive})=> isActive ? 'enabled' : ''} to='/'>Inicio</NavLink>
        <NavLink to='/products'>Productos</NavLink>

        <Outlet/>
    </>
  )
}

export default Layout