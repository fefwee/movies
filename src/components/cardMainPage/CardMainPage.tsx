import React, { FC, useEffect, useContext, useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import AuthPage from '../../pages/authPage/AuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addFavoriteMovie } from '../../store/features/counter/counterSlice';


const CardMainPage = ({ movie }: any) => {
  const value = useContext(Context);
  const [items, setItems] = useState<any>([]);
  const [itemsId, setItemsId] = useState<any>([]);
  const dispatch = useDispatch();
  const favoriteIconMovie = useSelector((state: any) => state.counter)
/*   const value = useContext(Context); */
  const newArrMovie = movie.slice(0, 6);




  const handleFavoriteId = (id: number) => {

    if (itemsId.includes(id)) {
      const updatedItems = itemsId.filter((item: any) => item !== id);
      /* setItemsId(updatedItems); */
      dispatch(addFavorite(updatedItems))
    } else {
      const updatedItems: any = [...itemsId, id];
      dispatch(addFavorite(updatedItems))
      /*  setItemsId(updatedItems); */

    }
  }

  const handleChangeFavorite = (itemsMovie: any) => {
    value.setFavorite(itemsMovie);
    handleFavoriteId(itemsMovie.kinopoiskId);

    const index = value.favorite.findIndex((item: any) => item.kinopoiskId === itemsMovie.kinopoiskId);
    if (index !== -1) {
      const newArray = value.favorite.filter((item: any, idx: any) => idx !== index);
      value.setFavorite(newArray);
      dispatch(addFavoriteMovie(newArray))
    } else {
      const newArray = [...value.favorite, itemsMovie];
      value.setFavorite(newArray);
      dispatch(addFavoriteMovie(newArray))
     /*  value.setFavorite(newArray); */
    }
  }


  useEffect(() => {
    setItemsId(favoriteIconMovie.value);
  }, [items, favoriteIconMovie]);




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