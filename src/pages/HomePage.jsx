import React from 'react'
import Header from '../components/Header.jsx'
import ImgTitleCard from '../components/ImgTitleCard.jsx'
import imgTitle from '../arrays/imgTitle.js'
import products from '../arrays/products.js'
import Header2 from '../components/Header2.jsx'
import AboutUs from '../components/AboutUs.jsx'
import CustomerReview from '../components/CustomerReview.jsx'
import customerReviews from '../arrays/customerReviewsArr.js'
import Contact from '../components/Contact.jsx'
import NewArr from '../components/NewArr.jsx'
import MostPopular from '../components/MostPopular.jsx'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <ImgTitleCard imgTitles={imgTitle}/>
      <NewArr products={products}/>
      <Header2/>
      <MostPopular products={products}/>
      <AboutUs/>
      <CustomerReview customerReviews={customerReviews}/>
      <Contact/>
    </div>
  )
}

export default HomePage
