import React from 'react'
import './headerhomepage.css'
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <header className='header'>
      <div className="header-content1">
        <h1 className='moto'>Every Step You Take Is a Step Closer to Your Goal.</h1>
      </div>
      <img src={assets.logo_putih} alt="" className="logoputih" />
      <div className="header-content2">
        <h1 className="slogan">"Stay Fit with FitPlan: Plan Your Exercises, Achieve Optimal Health!"</h1>
      </div>
      <div className="fiturutama">
        <img src={assets.fitur_list} alt="" className="fiturweb" />
        <img src={assets.fitur_progres} alt="" className="fiturweb" />
        <img src={assets.fitur_recomen} alt="" className="fiturweb" />
      </div>
    </header>
  )
}

export default Header