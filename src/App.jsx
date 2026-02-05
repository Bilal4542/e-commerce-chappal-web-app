import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"
import FavouritePage from "./pages/FavouritePage"
import NewArrivalPage from "./pages/NewArrivalPage"
import MostPopularPage from "./pages/MostPopularPage"
import HomePage from "./pages/HomePage"
import IndividualProduct from "./components/IndividualProduct"
import Cart from "./components/Cart"

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/favourite" element={<FavouritePage/>}/>
        <Route path="/new-arrival" element={<NewArrivalPage/>}/>
        <Route path="/most-popular" element={<MostPopularPage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/product/:id" element={<IndividualProduct/>}/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
