import React, { FC, useEffect, useContext, useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';


const CardMainPage = ({ movie }: any) => {

  const value  = useContext(Context);

  const newArrMovie = movie.slice(0, 6);


  const [items, setItems] = useState<any>([]);

  const handleChangeFavorite = (id: number) => {

      if (items.includes(id)) {
        // Если элемент уже есть в массиве, удаляем его
        const updatedItems = items.filter((item:any) => item !== id);
        setItems(updatedItems);
      } else {
        // Если элемент не найден в массиве, добавляем его
        const updatedItems:any = [...items, id];
        setItems(updatedItems);
        value.setFavorite(items);
      }
  }
   
  useEffect(() => {
    console.log(items)
  }, [items]);

  return (
    <div className={style.newContainer} >
      <div className={style.cardList} >
        {
          newArrMovie.map((item: any) => {
            return (

              <div className={style.card} key={item.kinopoiskId}>
                <div
                  className={style.favoriteBlock}
                  onClick={() => handleChangeFavorite(item.kinopoiskId)}
                >
                  <div className={items.includes(item.kinopoiskId) ? style.active : style.noActive}></div>
                </div>
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