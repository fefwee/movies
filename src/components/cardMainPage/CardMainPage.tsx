import React, { FC, useEffect, useContext, useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import AuthPage from '../../pages/authPage/AuthPage';


const CardMainPage = ({ movie }: any) => {


  const value = useContext(Context);

  const newArrMovie = movie.slice(0, 6);
  

  const [items, setItems] = useState<any>([]);
  const [itemsId, setItemsId] = useState<any>([]);


  const handleFavoriteId = (id: number) => {

    if (itemsId.includes(id)) {
      const updatedItems = itemsId.filter((item: any) => item !== id);
      setItemsId(updatedItems);
    } else {
      const updatedItems: any = [...itemsId, id];
      
      setItemsId(updatedItems);

    }
  }
  const handleChangeFavorite = (itemsMovie: any) => {

    handleFavoriteId(itemsMovie.kinopoiskId);

    const index = items.findIndex((item: any) => item.kinopoiskId === itemsMovie.kinopoiskId);

    if (index !== -1) {
      const newArray = items.filter((item: any, idx: any) => idx !== index);
      setItems(newArray);
    } else {
      const newArray = [...items, itemsMovie];
      setItems(newArray);
      value.setFavorite(newArray);
    }
  }

  useEffect(() => {
    console.log(items);
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
                  onClick={() => handleChangeFavorite(item)}
                >
                  <div className={itemsId.includes(item.kinopoiskId) ? style.active : style.noActive}></div>
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
      <AuthPage title='Регистрация' titleBtn='Зарегистрироваться' />
      <AuthPage title='Авторизация' titleBtn='Войти' />
    </div>

  )
}

export default CardMainPage