import { useState } from "react"
import Logo from "./Logo/Logo"
import Menus from "./Menus/Menus"
import styles from './Header.module.scss'
import Cadastro from "./Cadastro/Cadastro"
import Login from "./Login/Login"
import { Link } from "react-router-dom"

const Header = () => {

  const token = sessionStorage.getItem('token')
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null)

  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menus />
      <div>
        {!usuarioLogado && (
          <>
            <Cadastro />
            <Login logado={() => setUsuarioLogado(true)} />
          </>
        )}
        {usuarioLogado && (
          <>
            <Link className={styles.MinhaConta} to='/minha-conta/pedidos'>Minha conta</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header