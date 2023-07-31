import NavLink from '../NavLink/NavLink'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>RuT</h1>
      <div className={styles.links}>
        <NavLink to={'/'}>Home</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
