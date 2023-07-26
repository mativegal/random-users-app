import { User } from '../types'

type UsersListProps = {
  users: User[]
  showColors: boolean
  deleteUser: (email: string) => void
}

const UsersList = ({ users, showColors, deleteUser }: UsersListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>

      {
        <tbody>
          {users.map((user, index) => {
            const backgroundColor = showColors
              ? index % 2 === 0
                ? '#333'
                : '#555'
              : 'transparent'
            return (
              <tr
                key={user.email}
                style={{
                  backgroundColor,
                }}
              >
                <td>
                  <img src={user.picture.thumbnail} alt={user.name.first} />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button onClick={() => deleteUser(user.email)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      }
    </table>
  )
}

export default UsersList
