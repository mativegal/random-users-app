import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Random Users Table</h1>
      </div>
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.linkActive : styles.linkNotActive
          }}
          to={'/'}
        >
          Home
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
