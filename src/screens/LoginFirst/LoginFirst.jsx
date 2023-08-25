import React from 'react'
import './LoginFirst.css'
import {useNavigate} from 'react-router-dom'

export default function LoginFirst() {
    const navigate = useNavigate()
  return (
    <div className="NotFoundPageContainer">
        <div title="404">401</div>  
        <p onClick={()=>navigate('/login')} style={{fontSize:"1.25rem" , letterSpacing:1,cursor:"pointer", border:"2px solid #fff", padding:".25rem 5rem"}}>Login First</p>
    </div>
    )
}
