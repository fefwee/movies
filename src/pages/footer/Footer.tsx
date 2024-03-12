import React, { useEffect, useState } from 'react';
import style from './style.module.css'
import Calendar from '../../components/calendar/Calendar';

const Footer = () => {

  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': '1380760f-a029-4ff0-92d9-e34c16bc381b' }
    };

    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1', options)
      .then(response => response.json())
      .then(response => setTopMovie(response.items))
      .catch(err => console.error(err));
  }, [])  

  return (
    <div>
      <div className={style.flex}>
        <h1>Топ месяца</h1>
        <button>January 15-2022</button>
      </div>
      <div>
        <Calendar topMovie={topMovie} />
      </div>
    </div>
  )
}

export default Footer