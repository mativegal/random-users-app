import { SortBy, User } from '../../types/index.d'

// Types
import styles from './UsersList.module.css'

// Components
import UserListHeader from '../UserListHeader/UserListHeader'
import UserRow from '../UserRow/UserRow'

type UsersListProps = {
  users: User[]
  showColors: boolean
  deleteUser: (email: string) => void
  changeSorting: (sort: SortBy) => void
}

const UsersList = ({
  users,
  showColors,
  deleteUser,
  changeSorting,
}: UsersListProps) => {
  return (
    <table className={styles.container}>
      <UserListHeader changeSorting={changeSorting} />

      {
        <tbody>
          {users.map((user, index) => {
            const backgroundColor = showColors
              ? index % 2 === 0
                ? '#333'
                : '#555'
              : 'transparent'
            return (
              <UserRow
                user={user}
                key={user.login.uuid}
                backgroundColor={backgroundColor}
                deleteUser={deleteUser}
              />
            )
          })}
        </tbody>
      }
    </table>
  )
}

export default UsersList
