import React from 'react'
import "./aplikasi.css"

const Aplikasi = () => {

  const handleClick = () => {
    window.location.href = "/download";
  };

  return (
    <div className='download'>
        <h1>Start your own workout to do list!</h1>
        <button onClick={handleClick}>Get App</button>
    </div>
  )
}

export default Aplikasi