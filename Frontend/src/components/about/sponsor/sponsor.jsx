import React from 'react'
import "./sponsor.css"
import { assets } from "../../../assets/assets";

const Sponsor = () => {

  const handleClick = () => {
    window.location.href = "/workout";
  };

  return (
    <div className="sponsor">
        <h1 className='sponsor-title'>Partner & Sponsor</h1>
        <div className='about-contents'>
          <img src={assets.animasi_about} alt="" />
          <div className="about-sponsor-teks">
            <p>We are deeply grateful for the generous support of our sponsors. Their partnership is instrumental in our mission's success. Their commitment to our cause not only strengthens our organization but also demonstrates their dedication to making a positive impact. With their valuable contributions, we can continue our work with increased enthusiasm and effectiveness, and we look forward to a flourishing collaboration in the future.</p>
            <button onClick={handleClick}>See More</button>
           </div>
        </div>
    </div>
  )
}

export default Sponsor