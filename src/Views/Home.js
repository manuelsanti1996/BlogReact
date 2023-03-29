import React from 'react'
import HeaderNavBar from '../Components/NavBar/HeaderNavBar'
import CardHero from '../Components/Card/CardHero'
import CardsList from '../Components/Card/CardsList'
import SearchBar from '../Components/SearchBar/FilteredArticleList'

const Home = () => {
  return (
    <div>
      <HeaderNavBar />
      <CardHero title="Blog" description="descrizione della card" bgimage="././images/sfondo.jpeg" />
      <p className='font-semibold mx-4'> Ultime Notizie </p>
      <CardsList />
      <p className='font-semibold mx-4 my-4'>Archivio Notizie </p>
      <SearchBar />
    </div>
  )
}

export default Home
