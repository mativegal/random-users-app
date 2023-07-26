import './App.css'
import { useEffect, useState, useRef, useMemo } from 'react'
import { User } from './types'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortByCountry, setSortByCountry] = useState<boolean>(false)
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
    setSortByCountry(!sortByCountry)
  }

  const deleteUser = (email: string) => {
    const deletedUsers = users.filter((user) => user.email !== email)
    setUsers(deletedUsers)
  }

  const restoreUsers = () => {
    originalUsers.current && setUsers(originalUsers.current)
  }

  const filteredUsers = useMemo(() => {
    console.log('a')

    return filterCountries
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountries.toLowerCase())
        )
      : users
  }, [users, filterCountries])

  const sortedUsers = useMemo(() => {
    console.log('b')

    return sortByCountry
      ? // Need to return a new array
        filteredUsers.toSorted((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      : filteredUsers
  }, [filteredUsers, sortByCountry])

  return (
    <div>
      <header>
        <h1>Random Users Table</h1>
        <div>
          <button onClick={toggleColors}>Toggle Colors</button>
          <button onClick={toggleSortByCountry}>Sort by country</button>
          <button onClick={restoreUsers}>Restore</button>
          <input
            placeholder='Search by country'
            onChange={(e) => setFilterCountries(e.target.value)}
          />
        </div>
      </header>
      <main>
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          deleteUser={deleteUser}
        />
      </main>
    </div>
  )
}

export default App
