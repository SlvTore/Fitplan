import React from 'react'
import './footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content1">
        <div className="footer-teks">
          <h1 className="footer-title">Connect with FitPlan</h1>
          <p className="footer-deks">Subscribe to our mailing list and get the latest info and deals from us!</p>
        </div>
        <div className="footer-search">
          <label htmlFor="" className="search-title">Search Your Workout</label>
          <div className="search-column">
            <input type="searchitem" className="column-search" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
      <div className="footer-content2">
        <p className="footer-copyright">©Copyright 2024. All Right Reserved</p>
        <img src={assets.brand_logo} alt="" className="footer-brandlogo" />
        <div className="footer-ccopyright">
          <p className="footer-copyright">Privacy Policy</p>
          <p className="footer-copyright">Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer