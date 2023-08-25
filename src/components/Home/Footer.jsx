import React from 'react'
import wave from './images/wave.png'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <img src={wave} alt="" style={{width: '100%', height: '30%', margin: '0'}}/>
    </div>
  )
}

export default Footer