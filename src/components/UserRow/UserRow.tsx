import styles from './UserRow.module.css'

// Types
import { User } from '../../types/index.d'
import { useNavigate } from 'react-router-dom'

type UserProps = {
  user: User
  deleteUser: (email: string) => void
}

const UserRow = ({ user, deleteUser }: UserProps) => {
  const navigate = useNavigate()

  const navigateToUserDetail = (userEmail: string) => {
    navigate(`/randomuserdetail/${userEmail}`)
  }

  return (
    <tr className={styles.container}>
      <td>
        <img
          className={styles.photo}
          src={user.picture.thumbnail}
          alt={user.name.first}
        />
      </td>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.location.country}</td>
      <td className={styles.btnContainer}>
        <button
          className={styles.detailBtn}
          onClick={() => navigateToUserDetail(user.email)}
        >
          Details
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => deleteUser(user.email)}
        >
          ❌
        </button>
      </td>
    </tr>
  )
}

export default UserRow
