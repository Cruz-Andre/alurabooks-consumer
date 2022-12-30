import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Rodape from "../../components/Rodape"

const PaginaPadrao = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Rodape />
    </main>
  )
}

export default PaginaPadrao