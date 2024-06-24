import React from 'react'
import './sectionworkout.css'

const section = () => {

  const handleClickDownload = () => {
    window.location.href = "/download";
  };

  const handleClickMore = () => {
    window.location.href = "/workout";
  };

  return (
    <div className='section-workout-app'>
        <h1>DISCOVER YOUR POTENTIAL</h1>
        <p>Allows users to customize their workout plans based on their fitness objectives. Users can easily add exercises, set durations and intensity levels, and create schedules that align with their preferences.</p>
        <button onClick={handleClickDownload}>DOWNLOAD</button>
        <button onClick={handleClickMore}>LEARN MORE</button>
    </div>
  )
}

export default section