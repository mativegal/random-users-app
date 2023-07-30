import styles from './RandomUserDetail.module.css'
import { useContext, useEffect, useState } from 'react'
import { RandomUserContext } from '../context/RandomUserProvider.tsx'
import { useParams } from 'react-router-dom'

// Types
import { User } from '../types/index'

// Components
import RandomUserDetailCard from '../components/RandomUserDetailCard/RandomUserDetailCard.tsx'

const RandomUserDetail = () => {
  const { users } = useContext(RandomUserContext)
  const [user, setUser] = useState<User | null>(null)
  const { uuid } = useParams()

  useEffect(() => {
    const findUserByUUID = users.find((user) => user.login.uuid === uuid)
    setUser(findUserByUUID || null)
  }, [users, uuid])

  console.log(user?.location.country)

  return (
    <div className={styles.container}>
      <RandomUserDetailCard {...user} />
    </div>
  )
}

export default RandomUserDetail
