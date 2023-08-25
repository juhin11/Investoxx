import React from 'react'
import './card.css'


function card({image, heading, details}) {
  return (
    <div className='card'>
        <img src={image} alt="" style={{width: '60%', height: '50%'}}/>
        <span>{heading}</span>
        <span>{details}</span>
        <button className="c-button"> DISCOVER </button>
    </div>
  )
}

export default card