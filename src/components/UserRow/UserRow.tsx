import styles from './UserRow.module.css'

// Types
import { User } from '../../types/index.d'

type UserProps = {
  user: User
  deleteUser: (email: string) => void
}

const UserRow = ({ user, deleteUser }: UserProps) => {
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
      <td>
        <button
          className={styles.deleteBtn}
          onClick={() => deleteUser(user.email)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default UserRow
