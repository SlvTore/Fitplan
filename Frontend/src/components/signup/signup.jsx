import React from 'react'
import './signup.css'
import { assets } from "../../assets/assets";

const Signup = () => {
  return (
    <div className='signup'>
      <h1 class="title-register">Sign Up</h1>
      <div className="signup-content">
        <img src={assets.sign_up} alt="" className="signup-img" />
        <div className="signup-column">
          <form action="/submit_signup" method='post'>
            <div className='column-form'>
              <div className="form-grid">
                <label htmlFor="first-name"></label>
                <input type="text" id='first-name' name='first_name' placeholder='First name' required />
              </div>
              <div class="form-item">
                <label for="last-name"></label>
                <input type="text" id="last-name" name="last_name" placeholder="Last name" required />
              </div>
              <div class="form-item">
                <label for="birth-date"></label>
                <input type="date" id="birth-date" name="birth_date" placeholder="Birth date" required/>
              </div>
              <div class="form-item">
                <label for="username"></label>
                <input type="text" id="username" name="username" placeholder="User name" required />
              </div>
              <div class="form-item">
                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email Address" />
              </div>
              <div class="form-item">
                <label for="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" required />
              </div>
              <div class="form-item">
                <label for="confirm-password"></label>
                <input type="password" id="confirm-password" name="confirm_password" placeholder="Confirm password" required />
              </div>
              <div class="form-item">
                <label for="phone"></label>
                <input type="tel" id="phone" name="phone" placeholder="Phone number" />
              </div>
              <div class="form-item-gender">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="form-item">
                <label for="terms-and-conditions" class="checkbox-label">
                  <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" required />
                  <p>I agree to the Terms and Conditions</p>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Signup;