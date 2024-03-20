import React, { useEffect, useState } from 'react';
import style from './style.module.css'
import Calendar from '../../components/calendar/Calendar';
import { getRequest } from '../../core/requestApi';

const Footer = () => {

  const apiTopMovie = process.env.REACT_APP_TOP_POPULAR_MOVIE;

  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    getRequest(apiTopMovie)
      .then(response => response.json())
      .then(response => setTopMovie(response.items))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      <div className={style.flex}>
        <h1>Топ месяца</h1>
      </div>
      <div>
        <Calendar topMovie={topMovie} />
      </div>
    </div>
  )
}

export default Footer