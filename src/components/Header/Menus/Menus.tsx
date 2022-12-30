import { Link } from 'react-router-dom'
import usuario from '../BotaoNavegacao/usuario.svg'
import BotaoNavegacao from '../BotaoNavegacao/BotaoNavegacao'
import styles from './Menus.module.scss'
import ModalCadastroUsuario from '../../ModalCadastroUsuario/ModalCadastroUsuario'

const Menus = () => {
  return (
    <>
      <ul className={styles.navegacao}>
        <li>
          <a href="#!">Categorias</a>
          <ul className={styles.submenu}>
            <li><Link to="/">Frontend</Link></li>
            <li><Link to="/">Programação</Link></li>
            <li><Link to="/">Infraestrutura</Link></li>
            <li><Link to="/">Business</Link></li>
            <li><Link to="/">Design e UX</Link></li>
          </ul>
        </li>
        <li><Link to='/'>Favoritos</Link></li>
        <li><Link to='/'>Minha Estante</Link></li>
      </ul>
      <ul className={styles.acoes}>
        <li>
          <BotaoNavegacao texto="Login" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} />
        </li>
        <li>
          <BotaoNavegacao
            texto="Cadastrar-se"
            textoAltSrc="Icone representando um usuário"
            imagemSrc={usuario}
          />
          <ModalCadastroUsuario/>
        </li>
      </ul>
    </>
  )
}

export default Menus