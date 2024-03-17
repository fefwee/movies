import React, { useContext, useEffect, useState } from 'react'
import Profile from '../../components/profile/Profile'
import DetailMovie from '../../components/detailMovie/DetailMovie'
import FavoriteMovie from '../../components/favoriteMovie/FavoriteMovie';
import Context from '../../context/Context';

const RightPanel = () => {

  const value = useContext(Context);

  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': '1380760f-a029-4ff0-92d9-e34c16bc381b' }
    };

    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${value.idBook}`, options)
      .then(response => response.json())
      .then(response => setDetailMovie(response))
      .catch(err => console.error(err));
  }, [value.idBook])
  
  console.log(detailMovie)

  return (
    <div>
      <div>
        <DetailMovie detailMovie={detailMovie} />
      </div>
      <div>
        <FavoriteMovie detailMovie={detailMovie}/>
      </div>
    </div>
  )
}

export default RightPanel