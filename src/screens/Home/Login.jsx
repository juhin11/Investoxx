import React from 'react'
import Canvas from './Canvas'
import './Login.css'
function login() {
  return (

    <div style={{position:"relative"}}>
    {/* <h1 style={{color: 'white'}}>Contact Us</h1> */}
    <Canvas/>
    <form className="contactFormContainer" method='POST' action='https://formspree.io/f/xleknrrk'  id="contact">
        <div className='containner'>
            <h1 style={{color: 'white', textAlign: 'center'}}>Contact <span>Us</span></h1>
            
            <label htmlFor='Name'style={{color: 'white'}} >Name</label>
            <input type='text' name='name' placeholder='Enter name' id='name'/>

            
            <label htmlFor='email' style={{color: 'white'}}>Email</label>
            <input type='email' name='email' placeholder='Enter email' id='email'/>
            
            <label htmlFor='msg' style={{color: 'white'}}>Message</label>
            <textarea name='Message' id='msg' required="required" placeholder='Send your message'></textarea>        
            
            <button className='c-button'> 
                Submit
            </button>

        </div>
          
    </form>
        
    </div>
  )
}

export default login