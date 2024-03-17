import React from 'react'
import Logo from '../../components/logo/logo'
import Search from '../../components/search/Search'
import Profile from '../../components/profile/Profile'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <div>
      <Search/>
      </div>
      <div>
      <Profile />
      </div>
   
    </div>
  )
}

export default Header