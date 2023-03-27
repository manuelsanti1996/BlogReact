import React from 'react'
import CardArticle from '../Components/CardArticle'
import HeaderNavBar from '../Components/HeaderNavBar'
import CardHero from '../Components/CardHero'

const Home = () => {
  return (
    <div>
      <HeaderNavBar />
      <CardHero title="Blog" description="descrizione della card" bgimage="./sfondo.jpeg" />
      <p className='font-semibold mx-4'> Ultime Notizie </p>
      <div className='flex flex-row overflow-x-auto'>
        <CardArticle title="Articolo 1 " description="lorem ipsum" image="cardarticle.jpg" maxwidth="md" />
        <CardArticle title="Articolo 2" description="sed id faciam" image="images.jpg" maxwidth="md" />
        <CardArticle title="Articolo 3" description="iniquit" image="project-img1.png" maxwidth="md" />
      </div>
    </div>
  )
}

export default Home
