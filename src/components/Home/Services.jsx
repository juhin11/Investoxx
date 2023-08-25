import React from 'react'
import './Services.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import Card from './Card'
import { themeContext } from './Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Services() {
    const transition = {duration: 1, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='services'>
        <div className="awesome">
            <span> Our Awesome</span>
            <span>Services </span>
            <span>
            Investing in the stock market involves risk, and investors <br/> should be aware that there is always a possibility of losing money
            </span>
            <button className='button s-button'>Login</button>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        <div className="cards">
            
            <motion.div 
            whileInView={{left: '34rem'}}
            initial={{left: '25%'}}
            transition ={{transition}}
            style={{left: '34rem'}}>
                <Card
                    image = {image1}
                    heading = {'News'}
                    details = {'Reporting on stocks should be objective and unbiased'}
                />
            </motion.div>

            <motion.div 
            whileInView={{left: '16rem'}}
            initial={{left: '25%'}}
            transition ={{transition}}
            style={{top: '12rem', left: '16rem'}}>
                <Card
                    image = {image2}
                    heading = {'dashboard'}
                    details = {'Reporting on stocks should be objective and unbiased'}
                />
            </motion.div>

            <motion.div 
            whileInView={{left: '40rem'}}
            initial={{left: '-25%'}}
            transition ={{transition}}
            style={{top: '20rem', left: '40rem'}}>
                <Card
                    image = {image3}
                    heading = {'portfolio'}
                    details = {'Reporting on stocks should be objective and unbiased'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: "rgb(238 210 255)"}}></div>
            {/* <div className='blur' style={{background: '#C1F5FF', top: '25rem', width: '21rem' , height: '11rem', left: '-9rem', }}></div> */}


        </div>
    </div>
  )
}

export default Services