import React, { FC, useEffect, useContext, useState } from 'react';
import style from './style.module.css';
import noFavorite from '../../assets/cardMovie/niactive.svg'
import favorite from '../../assets/cardMovie/active.svg'
import { Link } from 'react-router-dom';


const CardMainPage = ({ movie }: any) => {


  const newArrMovie = movie.slice(0, 6);
  const active = false;
  const [isFavoriteArr, setIsFavoriteArr] = useState<any>([]);

    const handleChangeFavorite = (id: any) => {
    setIsFavoriteArr((prev:any)=> [...prev,id]);
  }

  useEffect(() => {
    
  }, [isFavoriteArr]);

  return (
    <div className={style.newContainer} >
      <div className={style.cardList} >
        {
          newArrMovie.map((item: any) => {
            return (

              <div className={style.card} key={item.kinopoiskId}>
                <div className={active ? style.active : style.niactive}
                  onClick={() => handleChangeFavorite(item.kinopoiskId)}
                ></div>
                <Link to={`/${item.kinopoiskId}`} >
                  <div className={style.cardImage}
                  >
                    <img src={item.posterUrl} />
                  </div>
                  <div>
                    <ul>
                      <li style={{ fontSize: "14px" }}
                      >{item.nameRu}</li>
                      <li>{item.year}</li>
                    </ul>
                  </div>
                </Link>
              </div>



            )
          })
        }
      </div>
    </div>

  )
}

export default CardMainPage