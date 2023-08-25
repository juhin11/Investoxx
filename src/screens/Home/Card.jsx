import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'
import Canvas from './Canvas'
function Card() {
  const transition ={transition:2, type: 'spring'}
  return (
    
    <div style={{position:"relative"}} id="services">
      <Canvas/>
    <div className='cardContainer'>
      <h1>Our services</h1>
      <div >
      <motion.div viewport={{ once: true }} whileInView={{transform: 'scale(1)',opacity:1 , transition: { delay:0 }}} initial={{transform: 'scale(0)', opacity:0}}  className="s-Card s-card1">
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
      </motion.div>
      <motion.div viewport={{ once: true }}  whileInView={{transform: 'scale(1)',opacity:1, transition: { delay: 0.25 }}} initial={{transform: 'scale(0)', opacity:0}} className="s-Card s-card2">
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
      </svg>


      </motion.div>
      <motion.div  viewport={{ once: true }} whileInView={{transform: 'scale(1)',opacity:1, transition: { delay: 0.5 }}} initial={{transform: 'scale(0)', opacity:0}} className="s-Card s-card3">
      
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>

      </motion.div>
      <motion.div viewport={{ once: true }} whileInView={{transform: 'scale(1)',opacity:1, transition: { delay: 0.75 }}} initial={{transform: 'scale(0)', opacity:0}} className="s-Card s-card4">
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>

      </motion.div>
      <motion.div viewport={{ once: true }} whileInView={{transform: 'scale(1)',opacity:1, transition: { delay: 1 }}} initial={{transform: 'scale(0)', opacity:0}} className="s-Card s-card5">
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
      </motion.div>
      <motion.div viewport={{ once: true }} whileInView={{transform: 'scale(1)',opacity:1, transition: { delay: 1.25 }}} initial={{transform: 'scale(0)', opacity:0}} className="s-Card s-card6">
      <svg style={{ transform:"scale(3)" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>

      </motion.div>
       
        {/* <div className='c-card'>
              <h2>Technical analysis tools</h2>
              <p>Many stock market analysis websites offer technical analysis tools such as moving averages, Bollinger Bands, and other indicators that can help users analyze trends and patterns in the stock market. </p>
          </div>
          <div className='c-card'>
          <h2>News and analysis</h2>
          <p>These websites typically provide users with up-to-date news and analysis related to the stock market and individual stocks, helping users stay informed and make better investment decisions. </p>
          </div>
          <div className='c-card'>
              <h2></h2>
              <p>Many stock market analysis websites allow users to create and manage their investment portfolios, providing features such as asset allocation, risk management, and performance tracking.</p>
              </div>
              <div className='c-card'>
              <h2>Education and resources</h2>
              <p> Stock market analysis websites may also offer educational resources such as tutorials, articles, and webinars to help users improve their investing knowledge and skills. </p>
              </div>
              <div className='c-card'>
              <h2>News</h2>
              <p>news provider </p>
            </div> */}
      </div>
    </div>
    </div>
  )
}

export default Card