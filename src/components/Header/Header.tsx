import { useState } from "react"
import Logo from "./Logo/Logo"
import Menus from "./Menus/Menus"
import usuario from './BotaoNavegacao/usuario.svg'
import styles from './Header.module.scss'
import Cadastro from "./Cadastro/Cadastro"
import Login from "./Login/Login"
import { Link, useNavigate } from "react-router-dom"
import BotaoNavegacao from "./BotaoNavegacao/BotaoNavegacao"

const Header = () => {

  const token = sessionStorage.getItem('token')
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null)
  
  let navigate = useNavigate()

  const efetuarLogout = () => {
    setUsuarioLogado(false)
    sessionStorage.removeItem('token')
    navigate('/')

  }

  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menus />
      <div className={styles.cadLogInOut}>
        {!usuarioLogado && (
          <>
            <Cadastro />
            <Login logado={() => setUsuarioLogado(true)} />
          </>
        )}
        {usuarioLogado && (
          <>
            <Link className={styles.MinhaConta} to='/minha-conta/pedidos'>Minha conta</Link>
            <BotaoNavegacao
              texto="Logout"
              textoAltSrc="Icone representando um usuário"
              imagemSrc={usuario}
              onClick={efetuarLogout}
            />
          </>
        )}
      </div>
    </nav>
  )
}

export default Header