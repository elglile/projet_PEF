import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

function Nav() {
    return (
        <section data-bs-version="5.1" className="menu menu2 cid-sFCw1qGFAI" once="menu" id="menu2-23">
            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <a href="#">
                                <img src="/images/min-logo-81x69.png" alt="Mobirise Website Builder" style={{ height: "4.5rem" }} />
                            </a>
                        </span>
                        <a href="/" className="navbar-caption-wrap text-decoration-none">
                            <span className="navbar-caption text-black display-7 text-decoration-none">EasyStady</span>
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-bs-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                            <li className="nav-item">
                                <a className="nav-link link text-black fs-6 text-decoration-none display-4" href="#top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link text-black fs-6 text-decoration-none display-4" href="#Services">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link text-black fs-6 text-decoration-none display-4" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link text-black fs-6 text-decoration-none display-4" href="#Contacts">Contacts</a>
                            </li>
                        </ul>
                        <div className="icons-menu">
                            {/* Language Selector */}
                            <div className="frere">
                                <FaGlobeAmericas color='black' />
                                <select name="language" className="Langue">
                                    <option value="en">EN</option>
                                    <option value="fra">FRA</option>
                                </select>
                            </div>
                        </div>
                        <a href="/Register">
                            <div className="navbar-buttons mbr-section-btn">
                                <a className="btn btn-info display-4">Log In<br /></a>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    );
}


export default Nav;