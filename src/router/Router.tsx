import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import RandomUserDetail from '../pages/RandomUserDetail/RandomUserDetail'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/randomuserdetail/:uuid' element={<RandomUserDetail />} />
        <Route
          path='*'
          element={<h1 style={{ textAlign: 'center' }}>Not Found</h1>}
        />
      </Routes>
    </div>
  )
}

export default Router
