import { useState } from "react"
import BotaoNavegacao from "../BotaoNavegacao/BotaoNavegacao"
import usuario from '../BotaoNavegacao/usuario.svg'
import styles from './Login.module.scss'
import ModalLoginUsuario from "./ModalLoginUsuario/ModalLoginUsuario"

const Login = () => {
  
  const [modalLoginAberto, setModalLoginAberto] = useState(false)

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
          aoEfetuarLogin={() => setModalLoginAberto(false)}
        />
      </li>
    </ul>
  )
}

export default Login