import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import moment from "moment";


const Calendar = ({topMovie}:any) => {

    const newTopMoveArr = topMovie.slice(0,8)
    return (
        <div>
            <div>
                <ul className={style.flexList}>
                {
                    newTopMoveArr.map((item:any)=>{
                        return (
                            <li key={item.kinopoiskId} className={style.posterImg}><img src={item.posterUrlPreview} alt="" /></li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Calendar