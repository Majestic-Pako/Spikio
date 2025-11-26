import { useState } from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer' 
import Silksong from './pages/Silksong'
import CoreKeeper from './pages/Core'
import Peak from './pages/Peak'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/silksong' element={<Silksong />} />
        <Route path='/corekeeper' element={<CoreKeeper />} />
        <Route path='/peak' element={<Peak />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
