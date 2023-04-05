import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../Components/NavBar/HeaderNavBar'
import CardHero from '../Components/Card/CardHero'
import CardsList from '../Components/Card/CardsList'
import FilteredArticleList from '../Components/SearchBar/FilteredArticleList'


const Home = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getData()
  }, [])



  const getData = async () => {
    const res = await fetch("http://localhost:3000/articles")
    const data= await res.json()
    setData(data);
  }



  return (
    <div>
      <HeaderNavBar />
      <CardHero title="Blog" margin="1rem" height="320px" borderRadius="6px" description="descrizione della card" bgimage="././images/sfondo.jpeg" />
      <p className='font-semibold mx-4'> Ultime Notizie </p>
       <CardsList data={data} />
        <p className='font-semibold mx-4 my-4'>Archivio Notizie </p>
      <FilteredArticleList data={data} />
    </div>
    
  )
}

export default Home
