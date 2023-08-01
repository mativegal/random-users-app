import { Route, Routes } from 'react-router-dom'

// Pages
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
          element={
            <h1
              style={{
                textAlign: 'center',
                marginTop: '100px',
              }}
            >
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  )
}

export default Router
