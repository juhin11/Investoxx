import React from 'react'
import './HomeBackground.css'

export default function HomeBackground() {
  return (
    <div style={{
        position:"absolute",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh"
    }}>
        <div className='stockCount' style={{    
            position:"absolute",
        left:"10vw",
        top:"30vh",
        transform:"rotateZ(315deg)"}}>
        
        <div className="card work">
            <div  className="img-section">

            <svg style={{width:"150",height:"150",transform:"translateX(50px)", color:"#1e1e1e",opacity:".753"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>

            </div>
            <div className="card-desc">
            <div className="card-header">
            <div className="card-title">Stocks In Database</div>
            <div className="card-menu">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            </div>
            </div>
            <div className="card-time">170 Stocks</div>
            <p className="recent">Last 2 months</p>
            </div></div>

        </div>

        <div className='macCard'>

        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div style={{backgroundColor:"#171717"}} className="card__content">

                <h1>Analyse</h1>
                <h1>Predict</h1>
                <h1>invest</h1>

            </div>
        </div>
        </div>
    </div>
  )
}
