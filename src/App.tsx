import './App.css'
import { useEffect, useState, useRef, useMemo } from 'react'

// Types
import { SortBy, User } from './types/index.d'

// Components
import Header from './components/Header/Header'
import UsersList from './components/UsersList/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountries, setFilterCountries] = useState<string | null>(null)
  const originalUsers = useRef<User[] | null>(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch((error) => console.error(error))
  }, [])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
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
    <div>
      <Header
        toggleColors={toggleColors}
        toggleSortByCountry={toggleSortByCountry}
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

export default App
