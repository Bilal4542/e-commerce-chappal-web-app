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
import Checkout from "./components/Checkout"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"
import Setting from "./components/Setting"
import AnotherAddress from "./components/AnotherAddress"
import ChangePassword from "./components/ChangePassword"
import ForgetPassword from "./components/ForgetPassword"
import Verification from "./components/Verification"
import NewPassword from "./components/NewPassword"
import Orders from "./components/Orders"
import AddReview from "./components/AddReview"
import Details from "./components/Details"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/favourite" element={<FavouritePage/>}/>
        <Route path="/new-arrival" element={<NewArrivalPage/>}/>
        <Route path="/most-popular" element={<MostPopularPage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/product/:id" element={<IndividualProduct/>}/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/profile" element={ <Profile/> }/>
        <Route path="/edit-profile" element={ <EditProfile/> }/>
        <Route path="/setting" element={ <Setting/> }/>
        <Route path="/another-address" element={ <AnotherAddress/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />
        <Route path="/forget-password" element={ <ForgetPassword/> } />
        <Route path="/verification" element={ <Verification/> } />
        <Route path="/new-password" element={ <NewPassword/> } />
        <Route path="/orders" element={ <Orders/> }/>
        <Route path="/add-review" element={ <AddReview/> }/>
        <Route path="/details" element={ <Details/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
