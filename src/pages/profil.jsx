import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBell, FaGlobeAmericas } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import { BsTranslate } from 'react-icons/bs';

import { Helmet } from 'react-helmet';


import { useHistory } from 'react-router-dom';

import { CgAdd } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import { BootstrapIcons } from 'react-bootstrap-icons';

import { Tab, Tabs } from 'react-bootstrap';

import { Sidebar } from "flowbite-react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";





function ProfilStudent(props) {
    return (
        <div className='countainer'>
            <Main />

        </div>
    );
}



function Main(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };


    return (
        <main id='contentAll' >
            <link rel="preload" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
            <ProfileWithData />
            {/* <section id={props.idd} className="content-section p-4 p-md-5 pt-5">
            
            </section> */}
        </main>
    );
}

// Profill
const ProfileWithData = () => {

    return (
        <>
            {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
            <div class="container">
                <div class="main-body  flex-lg-nowrap">
                    <div class=" gutters-sm">
                        <div class="" style={{}}>
                            <div class="col" style={{ display: "inline;" }}>
                                <div class="row">
                                    <div class="col mb-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="e-profile">
                                                    {/* <!-- prefil --> */}
                                                    <div class="d-flex flex-column align-items-center text-center">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                                            class="rounded-circle" style={{ maxWidth: '20%' }} />
                                                        <div class="mt-3">
                                                            <h4>John Doe</h4>
                                                            <p class="text-secondary mb-1">Etudient</p>
                                                            <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                                            <button class="btn btn-primary">Follow</button>
                                                            <button class="btn btn-outline-primary">Message</button>
                                                        </div>
                                                    </div>
                                                    <DynamicTabs />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

// Profil - editProfil
function DynamicTabs() {
    const [key, setKey] = useState('Prof'); // Initialize key state to 'Prof'

    return (
        <div className="container">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="Prof" title="Prof">
                    {/* Profil */}
                    <div class="tab-content pt-3">
                        <div class="tab-pane active">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Kenneth Valdez
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                            data-cfemail="5f39362f1f352a34322a37713e33">[email&#160;protected]</a>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Age</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        20
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-12">
                                        <a class="btn btn-info " target="__blank"
                                            href="edit_profile.html">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>

                {/* Other tabs */}
                <Tab eventKey="Edit Profil" title="Edit Profil">
                    {/* <h3 class="active nav-link">Menu 1</h3> */}
                    <ProfileWithEdit />
                </Tab>

                {/* <Tab eventKey="menu2" title="Menu 2">
                    <h3>Menu 2</h3>

                </Tab>
                <Tab eventKey="menu3" title="Menu 3">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Tab> */}
            </Tabs>
        </div>
    );
}

function ProfileWithEdit(params) {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div class="tab-content pt-3">
                <div class="tab-pane active">
                    <form class="form" novalidate>
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Full Name</label>
                                            <input class="form-control" type="text" name="name"
                                                placeholder="John Smith" value="John Smith" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Username</label>
                                            <input class="form-control" type="text"
                                                name="username" placeholder="johnny.s"
                                                value="johnny.s" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" type="email"
                                                placeholder="user@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Age</label>
                                            <input class="form-control" type="text"
                                                placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input class="form-control" type="number"
                                                placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input class="form-control" type="text"
                                                placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col mb-3">
                                        <div class="form-group">
                                            <label>About</label>
                                            <textarea class="form-control" rows="5"
                                                placeholder="My Bio"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                                <div class="mb-2"><b>Change Password</b></div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Current Password</label>
                                            <input class="form-control" type="password"
                                                placeholder="••••••" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>New Password</label>
                                            <input class="form-control" type="password"
                                                placeholder="••••••" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Confirm <span
                                                class="d-none d-xl-inline">Password</span></label>
                                            <input class="form-control" type="password"
                                                placeholder="••••••" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div class="mb-2"><b>Keeping in Touch</b></div>
                                <div class="row">
                                    <div class="col">
                                        <label>Email Notifications</label>
                                        <div class="custom-controls-stacked px-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox"
                                                    class="custom-control-input"
                                                    id="notifications-blog" checked />
                                                <label class="custom-control-label"
                                                    for="notifications-blog">Blog posts</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox"
                                                    class="custom-control-input"
                                                    id="notifications-news" checked />
                                                <label class="custom-control-label"
                                                    for="notifications-news">Newsletter</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox"
                                                    class="custom-control-input"
                                                    id="notifications-offers" checked />
                                                <label class="custom-control-label"
                                                    for="notifications-offers">Personal
                                                    Offers</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-end">
                                <button class="btn btn-primary" type="submit">Save
                                    Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}







export { Main };

export default ProfilStudent;