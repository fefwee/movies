import React from 'react';
import Slider from '../slider/Slider';

const FavoriteMovie = ({ detailMovie }: any) => {

    return (
        <div /* className={style.overfllowList} */>
            <div>
                <div>
                    <Slider />
                </div>
                <div>
                </div>
                {/* <h3>Смотреть позже</h3>
                <div className={style.movieContainer}>
                    <div >
                        <ul>
                            <li className={style.logo}><img src={detailMovie.posterUrlPreview} alt="" /></li>
                            <li>{detailMovie.nameRu}</li>
                            <li>{detailMovie.year}</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FavoriteMovie