import { NavLink as NavLinkReactRouter } from 'react-router-dom'
import styles from './NavLink.module.css'

type NavLinkProps = {
  to: string
  children?: React.ReactNode
}

const NavLink = ({ children, to, ...props }: NavLinkProps) => {
  return (
    <div>
      <NavLinkReactRouter
        to={to}
        {...props}
        className={({ isActive }) => {
          return isActive ? styles.linkActive : styles.linkNotActive
        }}
      >
        {children}
      </NavLinkReactRouter>
    </div>
  )
}

export default NavLink
