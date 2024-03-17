import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'

const SingleMoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<any>({})

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': '1380760f-a029-4ff0-92d9-e34c16bc381b' }
    };

    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <div >
      <div className={style.container}>
        <ul className={style.movieBox}>
          <li className={style.singleMovie}><img src={movie.posterUrl} alt="" /></li>
          <li>{movie.nameRu}</li>
          <li>{movie.year}</li>
        </ul>
      </div>
    </div>

  )
}

export default SingleMoviePage