import React, { useState } from 'react';
import { FaBell, FaGlobeAmericas } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import Notification from './notification';
import { Link } from 'react-router-dom';
import { IoNotificationsSharp } from 'react-icons/io5';






function Navbar(params) {

    return (
        <>
    <link href="././bootstrap/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"/>
            <header className="header-areaNav headersticky-nav">
                <div className="container container-nav">
                    <div className="row">
                        <div className="col-12">
                            <nav className="mainnav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to='/'>
                                    <a href="index.html" className="logo-nav">
                                        <img src="images/min-logo-81x69.png" />
                                    </a></Link>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                    {/* <!-- <li className="scroll-to-section"><a href="#men">Men's</a></li> --> */}
                                    {/* <!-- <li className="scroll-to-section"><a href="#women">Women's</a></li> --> */}
                                    {/* <!-- <li className="scroll-to-section"><a href="#kids">Kid's</a></li> --> */}
                                    <li className="submenu">
                                        <a href="javascript:;">Service</a>
                                        <ul>
                                            <li>
                                                <Link to='/Acceuil'>
                                                    <a href="">Global</a>
                                                </Link>
                                            </li>
                                            <li><a href="#">Job</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Home</a></li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to='/Contact_us'>
                                            <a href="#explore">Contact us</a>
                                        </Link>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">More-pages</a>
                                        <ul>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li>
                                                {/* <Link to={''}> */}
                                                    <a href="about.html">About Us</a>
                                                {/* </Link> */}
                                            </li>
                                            <li><a href="products.html">Products</a></li>
                                            <li>
                                                <Link to={'/PostPub'}>
                                                    <a href="about.html">Single Product</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Contact_us">
                                                    <a href="contact.html">Contact Us</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Profil">
                                                    <a href="contact.html">Profil</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/CreatePost">
                                                    <a href="contact.html">CreatePost</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/UpdatePost">
                                                    <a href="contact.html">UpdatePost</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Notify">
                                                    <a href="contact.html">Notify</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    {/* dash */}
                                    {/* <div className="header-button">
                                        <div className="noti-wrap">
                                            <div className="noti__item js-item-menu">
                                                <IoNotificationsSharp size={25} color='grey' />
                                                <span className="quantity">1</span>
                                                <div className="mess-dropdown js-dropdown">
                                                    <div className="mess__title">
                                                        <p>You have 2 news message</p>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Michelle Moreno</h6>
                                                            <p>Have sent a photo</p>
                                                            <span className="time">3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Diane Myers</h6>
                                                            <p>You are now connected on message</p>
                                                            <span className="time">Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__footer">
                                                        <a className="a" href="#">View all messages</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                            <IoNotificationsSharp size={25} color='grey' />
                                                <span className="quantity">1</span>
                                                <div className="email-dropdown js-dropdown">
                                                    <div className="email__title">
                                                        <p>You have 3 New Emails</p>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, 3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, April 12,,2018</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__footer">
                                                        <a className="a" href="#">See all emails</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                            <IoNotificationsSharp size={25} color='grey' />
                                                <span className="quantity">3</span>
                                                <div className="notifi-dropdown js-dropdown">
                                                    <div className="notifi__title">
                                                        <p>You have 3 Notifications</p>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c1 img-cir img-40">
                                                            <i className="zmdi zmdi-email-open" />
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a email notification</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c2 img-cir img-40">
                                                            <i className="zmdi zmdi-account-box" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Your account has been blocked</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c3 img-cir img-40">
                                                            <i className="zmdi zmdi-file-text" />
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a new file</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__footer">
                                                        <a className="a" href="#">All notifications</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-wrap">
                                            <div className="account-item clearfix js-item-menu">
                                                <div className="image">
                                                    <img className="w-80 h-auto" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="John Doe" />
                                                </div>
                                                <div className="content">
                                                    <a className="a" href="#">john doe</a>
                                                </div>
                                                <div className="account-dropdown js-dropdown">
                                                    <div className="info clearfix">
                                                        <div className="image">
                                                            <a className="a" href="#">
                                                                <img className="w-100 h-auto" src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="name">
                                                                <a className="a" href="#">john doe</a>
                                                            </h5>
                                                            <span className="email">johndoe@example.com</span>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__body">
                                                        <div className="account-dropdown__item">
                                                            <a className="a" href="#">
                                                                <i className="zmdi zmdi-account" />Account</a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a className="a" href="#">
                                                                <i className="zmdi zmdi-settings" />Setting</a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a className="a" href="#">
                                                                <i className="zmdi zmdi-money-box" />Billing</a>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__footer">
                                                        <a className="a" href="#">
                                                            <i className="zmdi zmdi-power" />Logout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <li>
                                    
                                        <div className="icons-menu">
                                                <Notification/>
                                            <a className="iconfont-wrapper mr-3" href="" target="_blank">
                                                <IoMdListBox />
                                            </a>
                                            {/* Langues */}
                                                <FaGlobeAmericas color='black' />
                                                <select name="" className="Langue">
                                                    <option value="en"><a href=''>EN</a></option>
                                                    <option value="fra"><a href=''>FRA</a></option>
                                                </select>
                                            

                                        </div>
                                    </li>
                                </ul>

                                <a className='menu-trigger-navbar'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Navbar;