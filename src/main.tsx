import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home.tsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Product from './pages/Product.tsx'
import ProductDetail from './pages/ProductDetail.tsx'
import Layout from './pages/Layout.tsx'
import ErrorDetail from './pages/ErrorDetail.tsx'
import AuthorizedUsers from './pages/AuthorizedUsers.tsx'

//se agregan las vistas por medio del roter, en un array de objetos

/*
  para crear rutas anidadas, se debe de definir en el parametro children un array de objetos de las rutas que se van a ir anidando
*/

/**
 * Para crear las rutas autorizadas se deben de crear componentes tipo outlet que puedan renderizar un children
 */
const router = createBrowserRouter([
  {path:'/',element:<Layout/>,errorElement:<ErrorDetail/>,children:[
                                        {path:'/',element:<Home></Home>},
                                        {element:<AuthorizedUsers/>,children:[
                                          {path:'products',element:<Product/>},
                                          {path:'product/:id',element:<ProductDetail/>}
                                        ]},

  ]},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>    
    <RouterProvider router={router}/>
  </StrictMode>,
)
