import React from 'react'
import intro from './images/image1.png'
import './Intro.css'
import { themeContext } from './Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

function Intro() {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>

        <div className="i-left">
            <div className="i-name">
                <span>Invest today for a </span>
                <span> Better Tomorrow</span>
                <span>The stock market plays a critical role in <br/>the economy by providing companies with a way to raise capital and offering <br/> investors the opportunity to earn a return on their investments.</span>
            </div>
            <button className='button i-button'>Know more</button>
        </div>

        <div className="i-right"> 
            <img src={intro} alt="" style={{ width: '100%', height: '100%', right: 0}} />
        </div>

        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: '#C1F5FF', top: '25rem', width: '21rem' , height: '11rem', left: '-9rem', }}></div>
    </div>
  )
}

export default Intro