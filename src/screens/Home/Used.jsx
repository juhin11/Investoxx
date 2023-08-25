import React from 'react'
import { useAnimation , motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import './Used.css'
import Canvas from './Canvas';

function Used() {
    const transition ={transition:2, type: 'spring'}

    const [data, setData] = React.useState([])
    
    const getdata = async () => {
        
    }

  return (
    <div className='usedContainer'>
      <Canvas/>
        <h1>Alibaba Services Used</h1>
        <motion.div viewport={{ once: true, margin: "0px 0px -200px 0px" }} whileInView={{transform: 'scaleY(1)',opacity:1 , transition: { delay:.31, duration:.3 }}} initial={{transform: 'scaleY(0)', opacity:0}} className='serviesUsed'>

            <motion.div viewport={{ once: true, margin: "0px 0px -200px 0px"  }} whileInView={{transform: 'scale(1)',opacity:1 , transition: { delay:0.55 }}} initial={{left: '14rem' , transform: 'scale(0)', opacity:0}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                </div>

                <div>
                    <h2>Database</h2>
                    <p>Investoxx.tech has implemented PolarDB as its database solution, which provides a fast, reliable, and secure data storage and retrieval system. With its advanced architecture, PolarDB ensures high availability and fault tolerance, making it an ideal choice for businesses that require a robust database solution. Additionally, its scalable design enables it to handle increasing amounts of data as Investoxx.tech grows and expands its operations.​</p>
                </div>
            </motion.div>


            <motion.div viewport={{ once: true, margin: "0px 0px -200px 0px"  }} whileInView={{transform: 'scale(1)',opacity:1 , transition: { delay:0.80 }}} initial={{transform: 'scale(0)', opacity:0}}>
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>

                <div>
                    <h2>Elastic Computing System</h2>
                    <p>Elastic Compute Service (ECS) is a powerful cloud computing solution that hosts the server for Django on Investoxx.tech. This reliable platform is capable of handling heavy workloads, making it an excellent choice for running complex AI models.The use of ECS was possible because we are given an free t5 burstable instance as a part of student benefit. </p>
                </div>
            </motion.div>


            <motion.div viewport={{ once: true, margin: "0px 0px -200px 0px"  }} whileInView={{transform: 'scale(1)',opacity:1 , transition: { delay:1.05 }}} initial={{transform: 'scale(0)', opacity:0}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                </div>
                <div>
                    <h2>Domain Name System</h2>
                    <p>We've opted for the reliable and secure services of Alibaba Cloud Domain Name Service to register your domain name. With investoxx.tech, you've acquired a highly professional and memorable domain name that's ideally suited for your financial and investment-related website or application​</p>
                </div>
            </motion.div>


            <motion.div viewport={{ once: true, margin: "0px 0px -200px 0px"  }} whileInView={{transform: 'scale(1)',opacity:1 , transition: { delay: 1.3 }}} initial={{transform: 'scale(0)', opacity:0}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>

                </div>
                <div>
                    <h2>Object Storage Service</h2>
                    <p>Object Storage Service (OSS) is a reliable and scalable solution used to securely store and manage the various assets and files of Investoxx.tech's website. It offers high durability, availability, and accessibility, ensuring that data can be easily retrieved and utilized whenever needed.​</p>
                </div>
            </motion.div>

            
        </motion.div>
    </div>
  )
}

export default Used