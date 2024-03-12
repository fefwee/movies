import React from 'react'
import iconSearch from '../../assets/formSearchHeader/search-normal.png';
import style from './style.module.css'
import circle from '../../assets/formSearchHeader/Ellipse 6.png';
import setting from '../../assets/formSearchHeader/setting-4.png';

const Search = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapperSearch}>
        <form>
          <div className={style.flex}>
            <span className={style.icon}><img src={iconSearch} alt="search" /></span>
            <input type="text" placeholder='Search for places' className={style.form} />
          </div>
        </form>
        <div>
          <div className={style.setting}>
            <span className={style.circleIcon}>
              <img src={circle} alt="" />
            </span>
            <span className={style.settingIcon}>
              <img src={setting} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search