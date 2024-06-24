import React from 'react'
import './headerabout.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='header-about'>
        <div className="header-about-content">
            <div className="header-about-teks">
                <h1>FitPlan</h1>
                <p>FitPlan's workout to-do list serves as a roadmap for our daily or weekly exercise routines, outlining specific activities, durations, and goals. It provides a clear direction, helping us stay focused and committed to our fitness objectives.</p>
                <p>Moreover, FitPlan's platform allows for customization and progression. We can tailor our workouts to suit our fitness level, preferences, and specific goals, thanks to FitPlan's personalized recommendations and tracking features. Whether aiming for weight loss, muscle gain, or overall health improvement, FitPlan's flexibility enables us to adapt and evolve our exercise routines over time.</p>
            </div>
            <img src={assets.logo_putih_tanpabg} alt="" />
        </div>
    </div>
  )
}

export default Header