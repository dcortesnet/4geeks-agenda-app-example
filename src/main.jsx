import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

import { ListadoDeAgendasPagina } from './pages/ListadoDeAgendasPagina.jsx'
import { CrearAgendaPagina } from './pages/CrearAgendaPagina.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BuscarAgendaPagina } from './pages/BuscarAgendaPagina.jsx'
import { EliminarAgendaPagina } from './pages/EliminarAgendaPagina.jsx'
import { CrearContactoPagina } from './pages/CrearContactoPagina.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Pagina principal</h1>
  },
  {
    path: "/listar-agendas",
    element: <ListadoDeAgendasPagina/>
  }, 
  {
    path: "/crear-agenda",
    element: <CrearAgendaPagina/>
  },
  {
    path: "/buscar-agenda",
    element: <BuscarAgendaPagina/>
  },
  {
    path: "/eliminar-agenda",
    element: <EliminarAgendaPagina/>
  },{
    path: "/crear-contacto",
    element: <CrearContactoPagina/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
