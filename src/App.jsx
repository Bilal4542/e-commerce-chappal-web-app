import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from './pages/Products'
import Favourite from './pages/Favourite'
import NewArrival from './pages/NewArrival'
import MostPopular from './pages/MostPopular'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="/new-arrival" element={<NewArrival/>}/>
        <Route path="/most-popular" element={<MostPopular/>} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </>
  )
}

export default App
