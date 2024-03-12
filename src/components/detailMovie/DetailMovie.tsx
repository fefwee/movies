import React, { useState } from 'react';
import style from './style.module.css';

const DetailMovie = ({ detailMovie }: any) => {

    const [showDescText, setShowDescText] = useState(true);
    const [active, setActive] = useState(false);

    const toggleDescText = () => {

        setShowDescText(() => !showDescText)
    }
    const toggleActive = () => {

        setActive(() => !active)
    }
    console.log(showDescText)
    return (
        <div className={style.container}>
            <ul className={style.detailBox}>
                <li className={style.detailImg}>
                    <img src={detailMovie.posterUrlPreview} alt="" />
                </li>
                <li>
                    {detailMovie.nameOriginal}
                </li>
                <li>
                    <button onClick={()=> toggleActive()} className={style.btnMore}>Посмотреть описание</button>
                </li>
            </ul>
            <div className={style.wrapperBox}>
            <div style={active ? {top:'0'}:{top:'-200%'}} className={style.descriptionBox}>
                <ul>
                    <li className={style.flex}><p>Название</p><span>{detailMovie.nameRu || detailMovie.nameEn || detailMovie.nameOriginal}</span></li>
                    <li className={style.flex}>
                        <p>Описание</p>
                        <span
                            onClick={() => toggleDescText()}
                            className={style.textDesc}
                            style={showDescText ? {
                                overflow: 'hidden',
                                
                            } : {minHeight:'300px'}}>
                            {detailMovie.description}</span>
                    </li>
                    <li className={style.flex}><p>Возрастное ограничение:</p><span>{detailMovie.ratingAgeLimits}</span></li>
                    {detailMovie.ratingKinopoisk && <li className={style.flex}><p>Рейтинг кинопоиска:</p><span>{detailMovie.ratingKinopoisk}</span></li>}
                    {detailMovie.ratingImdb && <li className={style.flex}><p>Рейтинг IMDb:</p><span>{detailMovie.ratingImdb}</span></li>}
                    <li className={style.flex}><p>Год:</p><span>{detailMovie.year}</span></li>
                </ul>
            </div>
            </div>
        </div>
    )
}


export default DetailMovie