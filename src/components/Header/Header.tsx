import Logo from "./Logo/Logo"
import Menus from "./Menus/Menus"
import styles from './Header.module.scss'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menus />
    </nav>
  )
}

export default Header