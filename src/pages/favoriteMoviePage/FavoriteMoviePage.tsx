import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'

const FavoriteMoviePage = () => {

  const value = useContext(Context);
  const [favoriteItems, setFavoriteItems] = useState<any>([]);

  useEffect(() => {
    setFavoriteItems(value.favorite);

  }, [value.favorite])


  return (
    <div>
      {favoriteItems}
    </div>
  )
}

export default FavoriteMoviePage