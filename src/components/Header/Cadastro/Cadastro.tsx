import { useState } from "react"
import ModalCadastroUsuario from "./ModalCadastroUsuario/ModalCadastroUsuario"
import BotaoNavegacao from "../BotaoNavegacao/BotaoNavegacao"
import usuario from '../BotaoNavegacao/usuario.svg'
import styles from './Cadastro.module.scss'

const Cadastro = () => {

  const [modalCadastroAberto, setModalCadastroAberto] = useState(false)

  return (
    <ul className={styles.cadastro}>
      <li>
        <BotaoNavegacao
          texto="Cadastrar-se"
          textoAltSrc="Icone representando um usuário"
          imagemSrc={usuario}
          onClick={() => setModalCadastroAberto(true)}
        />
        <ModalCadastroUsuario
          aberta={modalCadastroAberto}
          aoFechar={() => setModalCadastroAberto(false)}
        />
      </li>
    </ul>
  )
}

export default Cadastro