import React from 'react'
import './Contact.css'
import { AiFillFacebook, AiFillInstagram, AiFillMail } from 'react-icons/ai'

function Contact() {
  return (
    <section className='contact'>
        <div className='content'>
            <h1>Contact Us</h1>
            <p>contact us or give us feed back about your views or suggestion or any queries</p>
        </div>

        <div className='container'>
            <div className='contactInfo'>
                <div className='box'>
                    <div className='icon'><AiFillFacebook/></div>
                    <div className='text'>
                        <h3>Facebook</h3>
                        <p>Join us on facebook</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'><AiFillInstagram/></div>
                    <div className='text'>
                        <h3>Instagram</h3>
                        <p>Join us on Instagram</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'><AiFillMail/></div>
                    <div className='text'>
                        <h3> Mail</h3>
                        <p>Join on mail</p>
                    </div>
                </div>
            </div>
            <div className='contactForm'>
                <form method='POST' action='https://formspree.io/f/xleknrrk'>

                    <h2>Send Message</h2>
                    <div className='inputBox'>
                        <input type="text" name='Name' required="required"/>
                        <span>Full name</span>
                    </div>
                    <div className='inputBox'>
                        <input type="email" name='Email' required="required"/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <textarea name='Description' required="required"></textarea>
                        <span>Send your message</span>
                    </div>
                    <div className='inputBox'>
                        <input type="submit" name='Submit' value='send'/> 
                    </div>  
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
