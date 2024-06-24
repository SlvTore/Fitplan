import React, { useState } from 'react'
import './headerworkout.css'
import { assets } from '../../../assets/assets'

const Header = () => {

    const handleClick = () => {
        window.location.href = "/member";
    };

  return (
    <div className='header-workouts'>
        <div className="header-workout">
            <h1 className='header-workout-title'>4 WEEK</h1>
            <h2 className='header-workout-title2'>WORKOUT PLAN</h2>
            <p className='header-workout-deks'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat tincidunt, lectus ex bibendum libero, eget iaculis quam arcu quis mauris. Donec ex neque, egestas in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
            <button onClick={handleClick} className="workout-btn-member">Get Member</button>
            <button onClick={handleClick} className="workout-btn-member">Try For Free</button>
        </div>
        <img src={assets.image_workout} alt="" className="header-img" />
        <div className="header-text">
            <div className="header-text-column">
                <h3>GET INSPIRED</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.</p>
                <button onClick={handleClick}>Explore More</button>
            </div>
            <div className="header-text-column">
                <h3>CHALLENGE YOURSELF</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.</p>
                <button onClick={handleClick}>Explore More</button>
            </div>
        </div>
    </div>
  )
};

export default Header;