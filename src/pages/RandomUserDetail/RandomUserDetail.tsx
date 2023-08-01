import styles from './RandomUserDetail.module.css'
import { useContext, useEffect, useState } from 'react'
import { RandomUserContext } from '../../context/RandomUserProvider.tsx'
import { useParams } from 'react-router-dom'

// Types
import { User } from '../../types/index'

// Components
import RandomUserDetailCard from '../../components/RandomUserDetailCard/RandomUserDetailCard.tsx'

const RandomUserDetail = () => {
  const { users } = useContext(RandomUserContext)
  const [user, setUser] = useState<User | null>(null)
  const { uuid } = useParams()

  useEffect(() => {
    const findUserByUUID = users.find((user) => user.login.uuid === uuid)
    setUser(findUserByUUID || null)
  }, [users, uuid])

  return (
    <div className={styles.container}>
      {user ? <RandomUserDetailCard {...user} /> : <h1>User not found</h1>}
    </div>
  )
}

export default RandomUserDetail
