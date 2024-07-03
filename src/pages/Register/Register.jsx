import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterStyle.css'
import { Button } from 'bootstrap';
// import { Button } from 'bootstrap';

export function Register(params) {
  const [container,setcontainer]=useState('containerReg');
//   const [registerBtn,setregisterBtn]=useState('register');
//   const [loginBtn,setloginBtn]=useState('register');

const handleChange =()=>{
    container==='containerReg active'? setcontainer('containerReg'):setcontainer('containerReg active')
}
    return(
    <div className='body'>
            <div class={container} id="containerReg">
        <div class="form-containerReg sign-upReg">
            <form>
                <h1 id='h1t'>Create Account</h1>
                <div class="social-iconsReg">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <div style={{display: "flex"}}>
                    <input type="text" placeholder="First Name" style={{width:'90%',marginRight:'4px'}}/>
                    <input type="text" placeholder="Last Name" style={{width:'90%',marginRight:'4px'}}/>
                </div>
                <div className="text-right">
                <div style={{display: "flex", fontSize:'1rem' , height:"28px"}}>
                    <input type="radio" name="" id="" /><label htmlFor="">Stident</label>
                    <input type="radio" name="" id="" /><label htmlFor="">Entreprise</label>
                </div>
                </div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="conferm Password"/>

                <button className='Reg'>Sign Up</button>
            </form>
        </div>
        <div class="form-containerReg sign-inReg">
            <form>
                <h1 id='h1t'>Sign In</h1>
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
                    <h1 id='h1t'>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <h1 className="hiddenReg" id="register" onClick={handleChange}>Sign Up</h1>                </div>
                <div class="toggle-panelReg toggle-rightReg">
                    <h1 id='h1t'>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <h1 className="hiddenReg" id="register" onClick={handleChange}>Sign Up</h1>
                    {/* <button classname="hiddenReg">hello</button> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}