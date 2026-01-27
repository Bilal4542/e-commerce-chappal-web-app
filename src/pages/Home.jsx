import React from 'react'
import Header from '../components/Header'
import ImgTitleCard from '../components/ImgTitleCard'
import imgTitle from '../arrays/imgTitle.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <ImgTitleCard imgTitles={imgTitle}/>
    </div>
  )
}

export default Home
