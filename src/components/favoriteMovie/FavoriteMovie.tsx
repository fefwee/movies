import React, { useEffect, useState } from 'react';
import Slider from '../slider/Slider';

const FavoriteMovie = ({ detailMovie }: any) => {


    const [movie, setMovie] = useState([]);
    const [singleMovie, setSingleMovie] = useState([]);


  /*   useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef,'id')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

    }, []) */
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