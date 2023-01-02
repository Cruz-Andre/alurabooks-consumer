import React from "react"
import { Route, Routes } from "react-router-dom"
import AreaLogada from "./pages/AreaLogada/AreaLogada"
import Home from "./pages/Home"
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao"
import Pedidos from "./pages/Pedidos/Pedidos"


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaPadrao />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<AreaLogada />}>
          <Route path='pedidos' element={<Pedidos />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Rotas