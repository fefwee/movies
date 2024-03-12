import React from 'react';
import style from './style.module.css'

const Profile = () => {
  return (
    <div>
      <ul className={style.flex}>
        <li>UserName</li>
        <li><div className={style.logo}></div></li>
      </ul>
    </div>
  )
}

export default Profile