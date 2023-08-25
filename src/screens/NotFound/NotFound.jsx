import React from 'react'
import './NotFound.css'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="NotFoundPageContainer">
        <div title="404">404</div>  
        <p onClick={()=>navigate('/')} style={{fontSize:"1.25rem" , letterSpacing:1,cursor:"pointer", border:"2px solid #fff", padding:".25rem 5rem"}}>Go Back</p>
    </div>
    )
}
