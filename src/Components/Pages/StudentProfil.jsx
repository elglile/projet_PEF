import React, { useState } from 'react';
// import '.../STyleAll.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBell } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import { BsTranslate } from 'react-icons/bs';
import '../Home/css/Styleaside.css';
import '../Home/assets/dropdown/js/navbar-dropdown';
import '../Home/assets/dropdown/css/style.css';
import { Helmet } from 'react-helmet';

import '../Home/assets/mobirise/css/mbr-additional.css'
import { useHistory } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';


import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { CgAdd } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import { BootstrapIcons } from 'react-bootstrap-icons';

import { Tab, Tabs } from 'react-bootstrap';

function ProfilStudent(props) {
    return (
        <div className='countainer'>
            {/* <Navi/> */}
            <Header />

        </div>
    );
}


function Header(props) {
    const [toggel, setToggel] = useState('sidenav');
    const [toggeliD, settoggeliD] = useState('content');


    const open = () => {
        setToggel('sidenav-open');
        settoggeliD('content-open')
    };

    const close = () => {
        setToggel('sidenav');
        settoggeliD('content')
    };

    return (
        <>
            <link rel="preload" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
            <header data-bs-version="5.1" class="menu menu2 cid-sFCw1qGFAI" once="menu" id="menu2-23">

                <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-brand">
                            <button type="button" id="sidebarCollapse" >
                                {toggel === 'sidenav' ? (
                                    <span style={{ fontSize: '30px', cursor: 'pointer' }} id="toggel" onClick={open}>☰</span>
                                ) : (
                                    <span style={{ fontSize: '30px', cursor: 'pointer' }} id="toggel" onClick={close}>☰</span>
                                )}
                            </button>
                            <span class="navbar-logo">
                                <a href="">
                                    <img src="assets/images/min-logo-81x69.png" alt="Mobirise Website Builder" style={{ height: "4.5rem;" }} />
                                </a>
                            </span>
                        </div>

                        <div class="mr-3" id="navbarSupportedContent">
                            <div class="icons-menu">
                                {/* <a class="iconfont-wrapper mr-3" href="#" target="_blank"> */}
                                <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                                    <FaBell />
                                </a>
                                <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                                    <IoMdListBox />
                                </a>
                                <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                                    <BsTranslate />
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Main class={toggel} idd={toggeliD} />
            {/* <ProfileWithData/> */}
        </>
    );
}


function Main(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };


    return (
        <main id='contentAll' >
            <aside id="mySidenav" className={props.class}>
                {/* <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar> */}



            </aside>
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

                <Tab eventKey="menu2" title="Menu 2">
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </Tab>
                <Tab eventKey="menu3" title="Menu 3">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Tab>
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