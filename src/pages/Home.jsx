import React from 'react'
import Header from '../components/Header'
import ImgTitleCard from '../components/ImgTitleCard'
import imgTitle from '../arrays/imgTitle.js'
import newArrivalImages from '../arrays/newArrImg.js'
import Header2 from '../components/Header2.jsx'
import Card from '../components/Card.jsx'
import AboutUs from '../components/AboutUs.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <ImgTitleCard imgTitles={imgTitle}/>
      <Card newArrivalImages={newArrivalImages} title='New Arrival' btn='view all'/>
      <Header2/>
      <Card newArrivalImages={newArrivalImages} title='Most Popular' btn='view all'/>
      <AboutUs/>
    </div>
  )
}

export default Home
