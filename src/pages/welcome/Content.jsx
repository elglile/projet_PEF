import React, { useState } from 'react';
import Footer from './footer';
import Nav from './nav';
import { Link } from 'react-router-dom';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FiActivity, FiFacebook } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Content(props) {

    return (
        <div >
            <Nav />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
        </div>
    )
}





function Section1() {
    return (
        <section data-bs-version="5.1" className="header1 cid-u8DKjyLmAN mbr-fullscreen" id="header01-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                        <img className="w-100" src="assets/images/Studentcomfort.jpg" alt="Student Comfort" />
                    </div>
                    <div className="col-12 col-lg col-md-12">
                        <div className="text-wrapper align-left section-headingPost">
                            <h1 className="mbr-fonts-style mb-4">
                                From creation to market
                            </h1>
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                Create awesome websites on your computer! No code & free. Publish anywhere.
                            </p>
                            <div className="mbr-section-btn mt-3">
                                <a className="btn btn-outline-secondary display-7" href="#">Get started</a>
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
        <section className="our-services our-servicesPost" id='Services'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading section-headingPost">
                            <h2>Our Services</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item service-itemPost">
                            <h4>Safe easy house</h4>
                            <p>We provide the easiest ways to obtain secure housing according to your requirements, whether it's the location, type, or financial budget.</p>
                            <img src="images/Safe-easy-house.jpg" className="card-img-top" alt="Safe easy house" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item service-itemPost">
                            <h4>Best Easy Food</h4>
                            <p>We provide the best and easiest means to obtain food of all kinds to satisfy the user, from premium quality raw materials to excellently prepared ready-made meals and fast food as well.</p>
                            <img src="images/Best-Easy-Food.jpg" className="card-img-top" alt="Best Easy Food" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item service-itemPost">
                            <h4>Transportation</h4>
                            <p>Benefit from convenient and affordable transportation options to get around with ease.</p>
                            <img src="images/transportation.jpg" className="card-img-top" alt="Transportation" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
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
                            <p><FiActivity size={25}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
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