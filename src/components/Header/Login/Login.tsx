import { useState } from "react"
import BotaoNavegacao from "../BotaoNavegacao/BotaoNavegacao"
import usuario from '../BotaoNavegacao/usuario.svg'
import styles from './Login.module.scss'
import ModalLoginUsuario from "./ModalLoginUsuario/ModalLoginUsuario"

interface PropsLogin {
  logado: () => void
}

const Login = ({logado}: PropsLogin) => {
  
  const [modalLoginAberto, setModalLoginAberto] = useState(false)

  const aoEfetuarLogin = () => {
    setModalLoginAberto(false)
    logado()
  }
  
  return (
    <ul className={styles.login}>
      <li>
        <BotaoNavegacao 
          texto="Login" 
          textoAltSrc="Icone representando um usuário" 
          imagemSrc={usuario} 
          onClick={() => setModalLoginAberto(true)}
        />
        <ModalLoginUsuario
          aberta={modalLoginAberto}
          aoFechar={() => setModalLoginAberto(false)}
          aoEfetuarLogin={aoEfetuarLogin}
        />
      </li>
    </ul>
  )
}

export default Login