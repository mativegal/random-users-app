import { useParams } from 'react-router-dom'

const RandomUserDetail = () => {
  const { userEmail } = useParams()
  console.log(userEmail)

  return <div>{userEmail}</div>
}

export default RandomUserDetail
