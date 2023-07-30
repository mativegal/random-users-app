import './App.css'
import Navbar from './components/Navbar/Navbar'
import RandomUserProvider from './context/RandomUserProvider'
import Router from './router/Router'

const App = () => {
  return (
    <div>
      <RandomUserProvider>
        <Navbar />
        <Router />
      </RandomUserProvider>
    </div>
  )
}

export default App
