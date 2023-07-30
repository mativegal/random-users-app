import { createContext, useEffect, useRef, useState } from 'react'
import { RandomUserContextValue, RandomUserProviderProps, User } from '../types'

export const RandomUserContext = createContext<RandomUserContextValue>({
  users: [],
  setUsers: () => {},
  originalUsers: { current: null },
})

const RandomUserProvider = ({ children }: RandomUserProviderProps) => {
  const [users, setUsers] = useState<User[]>([])
  const originalUsers = useRef<User[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setUsers(data.results)
        originalUsers.current = data.results
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <RandomUserContext.Provider value={{ users, setUsers, originalUsers }}>
      {children}
    </RandomUserContext.Provider>
  )
}

export default RandomUserProvider
