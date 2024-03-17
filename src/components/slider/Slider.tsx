import React from 'react';
import style from './style.module.css'



const Slider = () => {
  return (
    <div className={style.container}>
      <ul className={style.containerList}>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
        <li className={style.flex}>
          <div>image</div>
          <div className={style.flex}>
           <p>Name</p>
           <p>Year</p>
          </div>
          <div>heart</div>
        </li>
      </ul>
    </div>
  )
};
export default Slider;