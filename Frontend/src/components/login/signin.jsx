import React from 'react'
import './signin.css'
import { assets } from "../../assets/assets";

const SignIn = () => {

    const handleClickHome = () => {
        window.location.href = "/homepage";
    };

    const handleClickSignup = () => {
        window.location.href = "/signup";
    };

  return (
    <div className='signin'>
        <h1 className="signin-title">Login</h1>
        <div className="signin-content">
            <img src={assets.sign_in} alt="" className="signin-img" />
            <div className="signin-column">
                <p className="signin-column-text">Continue with :</p>
                <div className="sign-brand-logo">
                    <img src={assets.apple_logo} alt="" />
                    <img src={assets.google_logo} alt="" />
                    <img src={assets.fb_logo} alt="" />
                </div>
                <p className='underline'>or</p>
                <div className='signin-column-akun'>
                    <form action="/submit_login" method='post'>
                        <div class="form-grid-log">
                            <div class="form-item-log">
                                <label for="email"></label>
                                <input type="email" id="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="form-item-log">
                                <label for="password"></label>
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <div class="form-item-log">
                                <label for="confirm-password"></label>
                                <input type="password" id="confirm-password" name="confirm_password" placeholder="Confirm password" required />
                            </div>
                        </div> 
                        <div class="form-submit">
                            <button onClick={handleClickHome}>Login</button>
                            <button onClick={handleClickSignup}>No Account? Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn