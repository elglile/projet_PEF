import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterStyle.css'
import { Button } from 'bootstrap';
// import { Button } from 'bootstrap';

export function Register(params) {
  

    return(
    <div className='body'>
            <div class="containerReg" id="containerReg">
        <div class="form-containerReg sign-upReg">
            <form>
                <h1>Create Account</h1>
                <div class="social-iconsReg">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <div style={{display: "flex;"}}>
                    <input type="text" placeholder="Name"/><input type="text" placeholder="Name"/>
                </div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className='Reg'>Sign Up</button>
            </form>
        </div>
        <div class="form-containerReg sign-inReg">
            <form>
                <h1>Sign In</h1>
                <div class="social-iconsReg">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <a href='/acceuil'><div className='Reg'>Sign In</div></a>
            </form>
        </div>
        <div class="toggle-containerReg">
            <div class="toggleReg">
                <div class="toggle-panelReg toggle-leftReg">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button classname="hiddenReg"  id="login">Sign In</button>
                </div>
                <div class="toggle-panelReg toggle-rightReg">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <h1 className="hiddenReg" id="register">Sign Up</h1>
                    {/* <button classname="hiddenReg">hello</button> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}