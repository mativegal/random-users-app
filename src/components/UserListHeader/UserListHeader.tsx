import styles from './UserListHeader.module.css'

// Types
import { SortBy } from '../../types/index.d'

type UserListHeaderProps = {
  changeSorting: (string: SortBy) => void
}

const UserListHeader = ({ changeSorting }: UserListHeaderProps) => {
  return (
    <div className={styles.container}>
      <th>Photo</th>
      <th className={styles.pointer} onClick={() => changeSorting(SortBy.NAME)}>
        First Name
      </th>
      <th className={styles.pointer} onClick={() => changeSorting(SortBy.LAST)}>
        Last Name
      </th>
      <th
        className={styles.pointer}
        onClick={() => changeSorting(SortBy.COUNTRY)}
      >
        Country
      </th>
      <th>Actions</th>
    </div>
  )
}

export default UserListHeader
