import styles from './Home.module.css'
import { useContext, useState, useMemo } from 'react'

// Context
import { RandomUserContext } from '../../context/RandomUserProvider.tsx'

// Types
import { SortBy, User } from '../../types/index.d'

// Components
import Header from '../../components/Header/Header.tsx'
import UsersList from '../../components/UsersList/UsersList.tsx'

function Home() {
  const { users, setUsers, originalUsers } = useContext(RandomUserContext)
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountries, setFilterCountries] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const deleteUser = (email: string) => {
    const deletedUsers = users.filter((user) => user.email !== email)
    setUsers(deletedUsers)
  }

  const restoreUsers = () => {
    originalUsers.current && setUsers(originalUsers.current)
  }

  const filteredUsers = useMemo(() => {
    return filterCountries
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountries.toLowerCase())
        )
      : users
  }, [users, filterCountries])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    }

    return filteredUsers.sort((a, b) => {
      const extractPropery = compareProperties[sorting]
      return extractPropery(a).localeCompare(extractPropery(b))
    })
  }, [filteredUsers, sorting])

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  return (
    <div className={styles.container}>
      <Header
        toggleColors={toggleColors}
        restoreUsers={restoreUsers}
        setFilterCountries={setFilterCountries}
      />
      <UsersList
        users={sortedUsers}
        showColors={showColors}
        deleteUser={deleteUser}
        changeSorting={handleChangeSort}
      />
    </div>
  )
}

export default Home
