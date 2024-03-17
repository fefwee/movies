import React, { FC, useEffect, useContext } from 'react';
import style from './style.module.css';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
const CardMainPage = ({ movie }: any) => {



  const value = useContext(Context);

  const handleGetIdBook = (id: any) => {
    
    value.setIdBook(id);
  }

  const newArrMovie = movie.slice(0, 10);
  useEffect(() => {

  }, []);


  return (
    <div className={style.container}>
      <div className={style.subContainer} >
        <div className={style.cardList} >
          {
            newArrMovie.map((item: any) => {
              return (
                <Link to={`/${item.kinopoiskId}`} key={item.kinopoiskId}>
                <ul className={style.card}  onClick={() => handleGetIdBook(item.kinopoiskId)} >
                  <li className={style.backgroundImg}><img src={item.posterUrl} /></li>
                  <li >{item.nameRu}</li>
                  <li>{item.year}</li>
                </ul>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardMainPage