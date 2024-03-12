import React, { useEffect, useState } from 'react'
import MainFilter from '../../components/mainFilter/MainFilter'
import CardMainPage from '../../components/cardMainPage/CardMainPage'

const Main = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': '1380760f-a029-4ff0-92d9-e34c16bc381b' }
    };

    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=FEBRUARY', options)
      .then(response => response.json())
      .then(response => setMovie(response.items))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      <h1 style={{ fontSize: '30px' }}>Премьеры 2024</h1>
      <MainFilter />
      <CardMainPage movie={movie} />
    </div>
  )
}

export default Main