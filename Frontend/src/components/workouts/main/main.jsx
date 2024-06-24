import React from 'react'
import './mainworkout.css'
import { menu_workout } from '../../../assets/assets'

const main = () => {

  const handleClick = () => {
    window.location.href = "/blogs";
  };

  return (
    <div className='main-workouts'>
      <h1 className="main-workouts-title">Workouts</h1>
      <div onClick={handleClick} className="main-workouts-menu">
        {menu_workout.map((item, index)=>{
          return (
            <div key={index} className="main-workouts-menu-list-item">
              <img className='workouts-menu-list-img' src={item.menu_image} alt="" />
              <div className='workouts-menu-list-workout'>
                <h1>{item.menu_name}</h1>
                <p>{item.menu_description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default main