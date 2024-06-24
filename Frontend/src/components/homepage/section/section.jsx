import React from 'react'
import './section.css'
import { assets } from "../../../assets/assets";

const Section = () => {

  const handleClick = () => {
    window.location.href = "/workout";
  };

  return (
    <div className='section'>
        <div className="section-content">
            <h2 className="section-title">FitPlan</h2>
            <p className="section-deks">Users can easily add exercises, set durations and intensity levels, and create schedules that align with their preferences. With features such as instructional videos, calorie tracking, and progress monitoring, this app enhances the effectiveness and organization of workout routines. FitPlan empowers users to design and manage exercise programs that cater to their health and fitness goals.</p>
            <button onClick={handleClick} className="section-btn">See More</button>
            <p className="section-getapp">Gat the App</p>
            <img src={assets.playstore} alt="" className="section-app" />
            <img src={assets.appstore} alt="" className="section-app" />
        </div>
        <img src={assets.preview_app} alt="" className="section-img" />
    </div>
  )
}

export default Section