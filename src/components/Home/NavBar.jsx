import React from 'react'
import './navbar.css'

import Toggle from './Toggle'

function NavBar() {
  return (
    <>
      <div className='n-wrapper'>

        <div className="n-left">
          <div className="n-name">Investoxx</div>
          <Toggle/> 
        </div>

        <div className="n-right">
          <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
              <li>Home</li>
              <li>About</li>
              <li>Dashboard</li>
            </ul>
          </div>
          <button className='button n-button'>
            Contact Us 
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar
