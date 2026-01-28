import React from 'react'
import Header from '../components/Header'
import ImgTitleCard from '../components/ImgTitleCard'
import imgTitle from '../arrays/imgTitle.js'
import NewArrival from '../components/NewArrival.jsx'
import newArrivalImages from '../arrays/newArrImg.js'
import Header2 from '../components/Header2.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <ImgTitleCard imgTitles={imgTitle}/>
      <NewArrival newArrivalImages={newArrivalImages}/>
      <Header2/>
    </div>
  )
}

export default Home
