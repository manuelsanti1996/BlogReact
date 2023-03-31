import React from 'react'
import CardHero from '../Components/Card/CardHero'
import Logo from "../Components/NavBar/Logo"
import CardSection from '../Components/Card/CardSection'
import CardsListComment from '../Components/Card/CardsListComment'




const ArticleTemplate = () => {
  return (
    <div>
      <div className='py-4 ml-4 mr-4'>
        <Logo />
      </div>
      <CardHero height="320px" margin="0" bgimage="././images/sfondo.jpeg" />

      <CardSection
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}
        title="Titolo Articolo"
        />

      <p className='font-bold text-2xl p-5'>Commenti</p>
      <CardsListComment />
      
    </div>
  )
}

export default ArticleTemplate


