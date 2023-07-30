import NavLink from '../NavLink/NavLink'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Random Users Table</h1>
      </div>
      <div className={styles.links}>
        <NavLink to={'/'}>Home</NavLink>
      </div>
    </div>
  )
}

export default Navbar
