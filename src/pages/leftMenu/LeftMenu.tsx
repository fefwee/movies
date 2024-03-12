import React from 'react'
import Logo from '../../components/logo/logo'
import style from './style.module.css'
import Menu from '../../components/menu/Menu'
const LeftMenu = () => {

  
  return (
    <div className={style.logo} >
      <div className={style.container}>
        <div>
          <Logo />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default LeftMenu