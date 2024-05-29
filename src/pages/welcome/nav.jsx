import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';
// import '/bootstrap/css/bootstrap.min.css';

// import '/bootstrap/css/bootstrap-grid.min.css';
// import '/bootstrap/css/bootstrap.min.css'

import { Link, redirect } from 'react-router-dom';

function Nav() {
    return (
        <section data-bs-version="5.1" className="menu menu2 cid-sFCw1qGFAI" once="menu" id="menu2-23">

            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <a href="#">
                                <img src="/images/min-logo-81x69.png" alt="Mobirise Website Builder" style={{ height: "4.5rem;" }} />
                            </a>
                        </span>
                        <a href='/' className="navbar-caption-wrap text-decoration-none">
                            <a className="navbar-caption text-black display-7  text-decoration-none" >EasyStady</a>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                            <li className="nav-item"><a className="nav-link link text-black  fs-6 text-decoration-none display-4" href="#top">Home</a></li>
                            <li className="nav-item"><a className="nav-link link text-black  fs-6 text-decoration-none display-4" href="#Services">Service</a></li>
                            <li className="nav-item"><a className="nav-link link text-black  fs-6 text-decoration-none display-4" href="#About">About</a></li>
                            <li className="nav-item"><a className="nav-link link text-black  fs-6 text-decoration-none display-4" href="#Contacts">Contacts</a></li></ul>
                        <div className="icons-menu">
                            {/* <a className="iconfont-wrapper" href="" target="_blank">
                            <span className="p-2 mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                        </a>
                        <a className="iconfont-wrapper" href="" target="_blank">
                            <span className="p-2 mbr-iconfont mbri-user"></span>
                        </a> */}
                            {/* <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                            <BsTranslate />
                        </a> */}
                            {/* Langues */}
                            <div class="frere">
                                <FaGlobeAmericas color='black' />
                                <select name="" class="Langue">
                                    <option value="en">EN</option>
                                    <option value="fra">FRA</option>
                                </select>
                            </div>

                        </div>
                        <a
                            href='/Register'
                        >

                            <div className="navbar-buttons mbr-section-btn">
                                <a className="btn btn-info display-4" >Log In<br /></a>
                            </div>
                        </a>

                    </div>
                </div>
            </nav>
        </section>

    );
}

export default Nav;