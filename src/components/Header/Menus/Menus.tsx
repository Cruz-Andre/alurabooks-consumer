import { Link } from 'react-router-dom'
import styles from './Menus.module.scss'

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
    </>
  )
}

export default Menus