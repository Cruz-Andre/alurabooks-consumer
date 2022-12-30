import logo from './logo.svg'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo alura books" />
      <p><strong>Alura</strong>Books</p>
    </div>
  )
}

export default Logo