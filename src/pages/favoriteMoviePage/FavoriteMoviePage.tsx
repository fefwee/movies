import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux';

const FavoriteMoviePage = () => {

  const favoriteIconMovie = useSelector((state: any) => state.counter)
  const [favoriteItems, setFavoriteItems] = useState<any>([]);

  useEffect(() => {

     setFavoriteItems(favoriteIconMovie.movie)
    console.log(favoriteItems); 

  }, [favoriteItems, favoriteIconMovie])


  return (
    <div className={style.flexFavorite} >
      {

        favoriteItems.map((item: any) => {
          return (
            <div key={item.kinopoiskId} className={style.favoriteList} >
              <div className={style.flexSubContainer}>
                <div>
                  <ul>
                    <li className={style.imageFavorite}><img src={item.posterUrlPreview} alt="" /></li>
                    <li>{item.nameRu}</li>
                    {<li>{item.countries[0].country}</li>}
                    <li>{item.genres.map((genre: any) => {
                      console.log(genre)
                      return (
                        <span>{genre.genre} </span>
                      )
                    })}</li>
                    <li>{item.premiereRu}</li>
                    <li>{item.year}</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }) 
      }
    </div>
  )
}

export default FavoriteMoviePage