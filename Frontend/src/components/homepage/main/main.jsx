import React from 'react'
import './main.css'
import { assets } from '../../../assets/assets'

const Main = () => {

  const handleClick = () => {
    window.location.href = "/download";
  };

  return (
    <main>
        <div className='main'>
            <div className="main-text">
              <h1 className="main-title">Make your own organized workout to do list</h1>
              <p className="main-deks">Allows users to customize their workout plans based on their fitness objectives. Users can easily add exercises, set durations and intensity levels, and create schedules that align with their preferences.</p>
              <button onClick={handleClick} className="getapp">Get App</button>
            </div>
            <img src={assets.animasi_app} alt="" className="main-img" />
        </div>
    </main>

  )
}

export default Main