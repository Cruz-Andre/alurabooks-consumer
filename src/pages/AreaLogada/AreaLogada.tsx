import { Link, Outlet } from "react-router-dom"

import styles from './AreaLogada.module.scss'

const AreaLogada = () => {
  return (
    <>
      <h1 className={styles.AreaLogadaTitulo}>Minha conta</h1>
      <section className={styles.AreaLogada}>
        <div className={styles.menu}>
          <ul className={styles.navegacao}>
            <li>
              <Link to="/area-logada/pedidos">Pedidos</Link>
            </li>
            <li>
              <Link to="/area-logada/trocas">Trocas</Link>
            </li>
            <li>
              <Link to="/area-logada/cupons">Cupons</Link>
            </li>
            <li>
              <Link to="/area-logada/dados">Seus dados</Link>
            </li>
          </ul>
        </div>
        <div className={styles.conteudo}>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default AreaLogada