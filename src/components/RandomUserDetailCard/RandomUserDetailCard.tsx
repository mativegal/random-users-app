import styles from './RandomUserDetailCard.module.css'

// Types
import { Dob, Gender, Login, Name, Picture, Location } from '../../types'

type RandomUserDetailCardProps = {
  gender?: Gender
  name?: Name
  email?: string
  login?: Login
  dob?: Dob
  cell?: string
  picture?: Picture
  location?: Location
}

const RandomUserDetailCard = ({
  gender,
  name,
  email,
  login,
  dob,
  cell,
  picture,
  location,
}: RandomUserDetailCardProps) => {
  const dateFormatted = dob?.date.slice(0, 10)

  return (
    <div className={styles.container}>
      <img className={styles.image} src={picture?.large} alt='Profile' />
      <p>
        {name?.first} {name?.last}
      </p>
      <div>
        <p>Username: {login?.username}</p>
        <p>Email: {email}</p>
      </div>
      <p>Gender: {gender}</p>
      <p>Date of Birth: {dateFormatted}</p>
      <p>Cell: {cell}</p>
      <p>Nationality: {location?.country}</p>
    </div>
  )
}

export default RandomUserDetailCard
