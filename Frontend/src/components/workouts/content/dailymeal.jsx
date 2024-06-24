import React from 'react'
import './dailymeal.css'
import { menu_dailymeal } from '../../../assets/assets'

const Dailymeal = () => {

    const handleClick = () => {
        window.location.href = "/blogs";
    };

  return (
    <div className='dailymeal'>
        <h1 className="dailymeal-title">Food Healthy</h1>
        <div onClick={handleClick} className="dailymeal-menu">
            {menu_dailymeal.map((item, index)=>{
                return (
                    <div key={index} className="dailymeal-list-item">
                    <img className='dailymeal-list-img' src={item.menu_image} alt="" />
                    <div className='dailymeal-list-workout'>
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

export default Dailymeal