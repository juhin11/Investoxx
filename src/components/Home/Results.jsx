import React from 'react'
import './results.css'
function Results() {
  return (
    <>
        <div className='heading'>
            <h1>OUR ACCURACY</h1>
        </div>
        <div className='result'>
        
        
            <div className="accuracy">
                <div className="circle"> 9+ </div>
                <span>out of</span>
                <span>10</span>
            </div>
            <div className="accuracy">
                <div className="circle"> 10+ </div>
                <span>out of</span>
                <span>10</span>
            </div>
            <div className="accuracy">
                <div className="circle"> 10+ </div>
                <span>out of</span>
                <span>10</span>
            </div>
         
        </div>
    
    </>
    
  )
}

export default Results