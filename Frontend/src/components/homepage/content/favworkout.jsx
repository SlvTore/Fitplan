import React from 'react'
import './favworkout.css'
import { menu_list } from '../../../assets/assets'


const Favworkout = () => {

  const handleClick = () => {
    window.location.href = "/blogs";
  };

  return (
    <div className='workout'>
      <h1 className="workout-title">Choose your favorite workout</h1>
      <div onClick={handleClick} className="workout-menu" id="favWorkoutButton">
        {menu_list.map((item, index)=>{
          return (
            <div key={index} className="workout-menu-list-item">
              <img className='menu-list-img' src={item.menu_image} alt="" />
              <div className='menu-list-workout'>
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

export default Favworkout