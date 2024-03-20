import React, { useEffect, useState } from 'react'
import MainFilter from '../../components/mainFilter/MainFilter'
import CardMainPage from '../../components/cardMainPage/CardMainPage'
import RightPanel from '../rightPanel/RightPanel'
import Footer from '../footer/Footer'
import style from './style.module.css'
import { getRequest } from '../../core/requestApi'

const Main = () => {
  const api: string | undefined = process.env.REACT_APP_lIST_MOVIE_PREMIERE;

  const [movie, setMovie] = useState([])

  useEffect(() => {
    getRequest(api)
      .then(response => response.json())
      .then(response => setMovie(response.items))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      {/* <h1 style={{ fontSize: '30px' }}>Премьеры 2024</h1> */}
      <div className={style.containerMain}>
        <div className={style.mainFilter}>
          <MainFilter />
        </div>
        <div className={style.cardMainPage}>
          <CardMainPage movie={movie} />
        </div>
        <div className={style.rightPanel}>
          <RightPanel />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main