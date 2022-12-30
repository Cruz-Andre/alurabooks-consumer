import Logo from "./Logo/Logo"
import Menus from "./Menus/Menus"
import styles from './Header.module.scss'
import Cadastro from "./Cadastro/Cadastro"
import Login from "./Login/Login"

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menus />
      <div>
        <Cadastro />
        <Login />
      </div>
    </nav>
  )
}

export default Header