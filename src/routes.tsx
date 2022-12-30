import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao"


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaPadrao />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Rotas