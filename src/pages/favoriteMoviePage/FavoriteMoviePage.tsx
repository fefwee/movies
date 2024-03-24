import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import style from './style.module.css'

const FavoriteMoviePage = () => {

  const value = useContext(Context);

  const [favoriteItems, setFavoriteItems] = useState<any>([]);

  useEffect(() => {

    console.log(value.favorite)
    setFavoriteItems(value.favorite)
    console.log(favoriteItems)
  }, [favoriteItems])


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
                    <li>{item.countries[0].country}</li>
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