import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RandomUserDetail from '../pages/RandomUserDetail'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/randomuserdetail/:userEmail'
          element={<RandomUserDetail />}
        />
      </Routes>
    </div>
  )
}

export default Router
