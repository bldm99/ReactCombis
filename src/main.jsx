import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


//Componentes exportados

import Distritos from './componentes/rutas/Distritos'
import Listar from './Listar'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Listar/>
  </React.StrictMode>

  /*<React.StrictMode>
    <Distritos/>
  </React.StrictMode>*/



)
