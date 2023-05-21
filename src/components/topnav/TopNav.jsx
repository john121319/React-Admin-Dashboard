import React from 'react'

import './topnav.scss'
import Userinfo from '../user-info/Userinfo'
import { data } from '../../constants'


const TopNav = () => {
  return (
    <div className="topnav">
      <Userinfo user={data.user} />
      <div className="sidebar-toggle">
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  )
}

export default TopNav