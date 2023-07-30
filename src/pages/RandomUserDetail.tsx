import { useParams } from 'react-router-dom'
import { RandomUserContext } from '../context/RandomUserProvider.tsx'
import { useContext, useEffect, useState } from 'react'
import { User } from '../types/index'

const RandomUserDetail = () => {
  const { users } = useContext(RandomUserContext)
  const [user, setUser] = useState<User | null>(null)
  const { uuid } = useParams()

  useEffect(() => {
    const userFound = users.find((user) => user.login.uuid === uuid)
    setUser(userFound || null)
  }, [users, uuid])

  if (!user) {
    return <div>No se encontró el usuario.</div>
  }

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>Nombre: {user.name.first}</p>
      <p>Apellido: {user.name.last}</p>
      <p>Email: {user.email}</p>
      {/* Agrega aquí otros detalles que quieras mostrar */}
    </div>
  )
}

export default RandomUserDetail
