import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { getRequest } from '../../core/requestApi';

const SingleMoviePage = () => {

  const apiSingleMovie = process.env.REACT_APP_TOP_SiNGLE_MOVIE;
  const { id } = useParams();

  const [movie, setMovie] = useState<any>({})

  useEffect(() => {
    getRequest(`${apiSingleMovie}${id}`)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <div >
      <div className={style.container}>
        <div className={style.poster}>
          <img src={movie.posterUrl} alt="" />
        </div>
        <div>
          <ul className={style.movieBox}>
            <li>{movie.nameRu}</li>
            <li>{movie.ratingKinopoisk}</li>
            <li>{movie.year}</li>
            <li>{movie.ratingAgeLimits}</li>
            <li>{movie.description}</li>
          </ul>
        </div>

      </div>
    </div>

  )
}

export default SingleMoviePage