import React from 'react'
import './contact.css'
import { assets } from "../../../assets/assets";

const Contact = () => {
  return (
    <div className="about-contact">
      <div className="about-contact-form">
          <h1>Contact Us</h1>
          <form action="/contact" method='post'>
            <div className="contact-name">
              <label for="name"></label>
              <input type="name" id='name' name='name'placeholder='Name'/>
            </div>
            <div class="contact-email">
              <label for="email"></label>
              <input type="email" id="email" name="email" placeholder="Email Address" />
            </div>
            <div className="contact-subject">
              <label for="subject"></label>
              <input type="subject" id='subject' name='subject' placeholder='Subject'/>
            </div>
            <div className="contact-message">
              <label for="message"></label>
              <input type="message" id='message' name='message' placeholder='Message'/>
            </div>
            <button>Submit</button>
          </form>
      </div>
      <img src={assets.animasi_about_qna} alt="" />
    </div>
  )
}

export default Contact