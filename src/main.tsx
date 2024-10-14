import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

//se agregan las vistas por medio del roter, en un array de objetos
const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/productos',element:<>Mi producto</>},

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
