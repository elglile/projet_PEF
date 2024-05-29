import React, { useState } from 'react';
// import './css/style.css';
import Footer from './footer';
import Nav from './nav';
import { Link } from 'react-router-dom';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FiFacebook } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import './assets/mobirise/css/mbr-additional.css';

export default function Content(props) {

    return (
        <div >
            <Nav />
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Section4/> */}
            <Section5 />
            {/* <Section6/> */}
            <Footer />
        </div>
    )






}
function Section1() {
    return (
        <section data-bs-version="5.1" className="header1 cid-u8DKjyLmAN mbr-fullscreen" id="header01-5">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                        {/* <img className="w-100" src="images/-6c43a1aa-fde0-4eaa-861b-f1f3dfac0fdc-removebg-preview-501x500.png" /> */}
                        <img className="w-100" src="images/Studentcomfort.jpg" />
                    </div>
                    <div className="col-12 col-lg col-md-12">
                        <div className="text-wrapper align-left section-headingPost">
                            <h1 className=" mbr-fonts-style mb-4 ">
                                From creation to market
                            </h1>
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                Create awesome websites on your computer! No code &amp; free. Publish anywhere.
                            </p>
                            <div className="mbr-section-btn mt-3">
                                <a className="btn btn-danger display-7" href="#">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




/* rechercher dans fill mbr-additional.css pou le css :<!-- ***** Services Area Starts ***** -->*/
function Section2() {
    return (
        <section class="our-services our-servicesPost" id='Services'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading section-headingPost">
                            <h2>Our Services</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item service-itemPost">
                            <h4>Safe easy house</h4>
                            <p>We provide the easiest ways to obtain secure housing according to your requirements, whether it's the location, type, or financial budget.</p>
                            <img src="images/Safe-easy-house.jpg"  class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item service-itemPost">
                            <h4>Best Easy Food</h4>
                            <p>We provide the best and easiest means to obtain food of all kinds to satisfy the user, from premium quality raw materials to excellently prepared ready-made meals and fast food as well.</p>
                            <img src="images/Best-Easy-Food.jpg"  class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="service-item service-itemPost">
                            <h4>transportation</h4>
                            <p>Benefit from convenient and affordable transportation options to get around with ease.</p>
                            <img src="images/transportation.jpg"  class="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




/* rechercher dans fill mbr-additional.css pou le css :<!-- ***** About Company ***** -->*/
function Section3(props) {
    return (
        <div class=" about-usAbout" id='About'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left-imageAbout">
                            <img src="images/mbr-1-1256x837.jpg" alt="Mobirise Website Builder" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="right-contentAbout right-content-p-About">
                            <h4>About Us &amp; Our Skills</h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                            <div class="quoteAbout">
                                <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <ul className='socialAbout'>
                                <li><a href="#"><FaFacebookF size={24} /></a></li>
                                <li><a href="#"><FaTwitter size={24} /></a></li>
                                <li><a href="#"><FaLinkedinIn size={24} /></a></li>
                                {/* <li><a href="#"><i class="fa fa-behance"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



// Why clients choose us?
const Section4 = () => {
    return (
        <section data-bs-version="5.1" class="content10 cid-sFAZRnJnnI" id="content10-22">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md">

                        <h6 class="mbr-section-subtitle mbr-fonts-style mb-4 display-2"><strong>Why clients choose us?</strong></h6>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. Vestibulum nec massa a nisl condimentum mattis. Mauris semper risus dui, vitae pulvinar sapien rutrum in. Cras risus ante, porta vel volutpat vel, pulvinar in magna. Donec lacinia in mi eget pharetra.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};



/* rechercher dans fill mbr-additional.css pou le css :    <!-- ***** Subscribe Area Starts ***** -->*/
const Section5 = () => {
    return (

        <div class="subscribeContacts" id='Contacts'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="section-headingContacts">
                            <h2>Contacts</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                        <form id=" " action="" method="get">
                            <div class="row">
                                <div class="col-lg-5">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Your Name" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-5">
                                    <fieldset>
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*"
                                            placeholder="Your Email Address" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-2">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="main-dark-button">
                                            <LiaTelegramPlane />
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-6">
                                <ul id="ul">
                                    <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                    <li>Phone:<br /><span>010-020-0340</span></li>
                                    <li>Office Location:<br /><span>North Miami Beach</span></li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul id="ul">
                                    <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                    <li>Email:<br /><span>info@company.com</span></li>
                                    <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



// Contacts
const Section6 = () => {
    return (
        <section data-bs-version="5.1" class="contacts2 cid-sFzIA7KGYz " id="contacts2-1r">

            <div class="container ">
                <div class="mbr-section-head">
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        Contacts
                    </h3>
                    <h4 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div>
                <div>
                    <div className='d-flex'>
                        <div class="card col-12 col-md-6">
                            <div class="card-wrapper">
                                <div class="image-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-phone mobi-mbri"></span>
                                </div>
                                <div class="text-wrapper">
                                    <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                        <strong>Phone</strong>
                                    </h6>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        <a href="tel:+12345678910" class="text-primary">0 (800) 123 45 67</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-6">
                            <div class="card-wrapper">
                                <div class="image-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                                </div>
                                <div class="text-wrapper">
                                    <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                        <strong>Email</strong>
                                    </h6>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div class="card col-12 col-md-6">
                            <div class="card-wrapper">
                                <div class="image-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
                                </div>
                                <div class="text-wrapper">
                                    <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                        <strong>Address</strong>
                                    </h6>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        4100 Ross Street, Okawville, IL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-6">
                            <div class="card-wrapper">
                                <div class="image-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
                                </div>
                                <div class="text-wrapper">
                                    <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                        <strong>Working Hours</strong>
                                    </h6>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        9:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};




function Alert(props) {
    const [showAlert, setShowAlert] = useState(true);
    const [SignUpp, setSignUpp] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);

    const closeAlert = () => {
        setShowAlert(false);
        props.cc('true');
    };

    const openForgotPassword = () => {
        setForgotPassword(true);
    };

    const handleBack = () => {
        setForgotPassword(false);
    };

    if (forgotPassword) {
        return (
            <div id='alertt'>
                {showAlert && (
                    <div className={`login-alert`}>
                        <form className="form-Al">
                            <span className="close-btn" onClick={closeAlert}>×</span>
                            <br />
                            {/* <p class="title-Al">Register </p> */}
                            <p class="message-Al">Signup now and get full access to our app. </p>
                            <div class="flex-Al">
                            </div>

                            <label>
                                <input class="input-Al" type="email" placeholder="" required="" />
                                <span>Enter your email</span>
                            </label>


                            <button className="submit-Al">Submit</button>
                            <p> <a href="#" onClick={handleBack}>Back</a> </p>
                            <p className="signin-Al">Don't have an account? <a href="#" onClick={() => { setSignUpp(true); }}>Sign Up</a> </p>
                        </form>
                    </div>
                )}
            </div>
        );
    } else if (SignUpp) {
        return (
            <div id='alertt'>
                {showAlert && (
                    <div className={`login-alert`}>
                        <form class="form-Al">
                            <span className="close-btn" onClick={closeAlert}>×</span>
                            <br />
                            {/* <p class="title-Al">Register </p> */}
                            <ul class="login-nav">
                                <li class="login-nav__item active">
                                    <div onClick={() => { setSignUpp(false); }}>Log In</div>
                                </li>
                                <li class="login-nav__item">
                                    <div >Sign Up</div>
                                </li>
                            </ul>
                            <div class="flex-Al">
                                <label>
                                    <input class="input-Al" type="text" placeholder="" required="" />
                                    <span>Firstname</span>
                                </label>

                                <label>
                                    <input class="input-Al" type="text" placeholder="" required="" />
                                    <span>Lastname</span>
                                </label>
                            </div>

                            <label>
                                <input class="input-Al" type="email" placeholder="" required="" />
                                <span>Email</span>
                            </label>

                            <label>
                                <input class="input-Al" type="password" placeholder="" required="" />
                                <span>Password</span>
                            </label>
                            <label>
                                <input class="input-Al" type="password" placeholder="" required="" />
                                <span>Confirm password</span>
                            </label>
                            <button class="submit-Al">Submit</button>
                            <p class="signin-Al">Already have an acount ? <a href="#">Signin</a> </p>
                        </form>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div id='a'>
                {showAlert && (
                    <form className="form-Al login-alert">
                        <span className="close-btn" onClick={closeAlert}>×</span>
                        <br />
                        {/* <p class="title-Al">Register </p> */}
                        <ul class="login-nav">
                            <li class="login-nav__item active">
                                <div  >Log In</div>
                            </li>
                            <li class="login-nav__item">
                                <div onClick={() => { setSignUpp(true); }}>Sign Up</div>
                            </li>
                        </ul>
                        <p class="message-Al">Signup now and get full access to our app. </p>
                        <div class="flex-Al">
                        </div>

                        <label>
                            <input class="input-Al" type="email" placeholder="" required="" />
                            <span>Email</span>
                        </label>

                        <label>
                            <input class="input-Al" type="password" placeholder="" required="" />
                            <span>Password</span>
                        </label>
                        <Link to='/acceuil'>
                            {/* <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" id='btn'>Send application</button> */}
                            <button className="submit-Al w-100 m-10">Submit</button>
                        </Link>
                        {/* <button className="submit-Al">Submit</button> */}
                        <p> <a href="#" onClick={openForgotPassword}>Forgot Password</a> </p>
                        <p className="signin-Al">Don't have an account? <a href="#">Sign Up</a> </p>
                    </form>
                )}
            </div>
        );
    }
}