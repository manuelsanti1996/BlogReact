import React from 'react'
import CardArticle from '../Components/CardArticle'
import HeaderNavBar from '../Components/HeaderNavBar'
import CardHero from '../Components/CardHero'

const Home = () => {
  return (
    <div>
    
    <HeaderNavBar />
    <CardHero />
    <div className='flex flex-row'>
    <CardArticle maxwidth="md"/>
    <CardArticle maxwidth="md"/>
    </div>
    </div>
  )
}

export default Home
