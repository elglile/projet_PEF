import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import data from './MOCK_DATA.json';
import Articles from './Articles.json';
import Siginiales from './Siginiales.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CFormSwitch } from '@coreui/react';
import { IoIosNotifications, IoMdPersonAdd } from 'react-icons/io';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from 'recharts';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';


import './App.css';
import { Container, Form, FormControl, Nav, NavDropdown, Navbar, Row, Col, Dropdown } from 'react-bootstrap';
// import './Admin.css';
export function PageAdmin() {
  return (
    <><NavAdmin />
      {/* <Navv/> */}
      {/* <NotificationDropdown /> */}
      <Dashboard />
      <Tablau />
      {/* <ModifyAlert /> */}
      {/* <ProfileCard /> */}
      <TablePost />
      <TableSingial />
      <TablauAdmin />
    </>
  );
}



export function NavAdmin() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl" style={{marginBottom:"50px"}}>
      <Container>
        <img src="/images/min-logo-81x69.png" />
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" >
          <Nav className="ml-auto" style={{ alignItems: 'center' }}>
            <Nav.Link href="#" className="active"><i className="fa fa-home"></i> Dashbord</Nav.Link>
            <Nav.Link href="#"><i className="fa fa-pie-chart"></i> Reports</Nav.Link>
            <NotificationDropdown />


            <NavDropdown title={<span style={{ color: 'white' }}><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" /> Antonio Moreno</span>} id="collasible-nav-dropdown">

              <NavDropdown.Item href="#">
                <Link to='/es-admin/Profil'>
                  <i className="fa fa-user-o"></i> Profile
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                <i className="fa fa-calendar-o"></i> Calendar
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i className="fa fa-sliders"></i> Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to='/es-admin'>
                  <i className="material-icons">&#xE8AC;</i> Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}


const notificationsdata = [
  {
    id: 1,
    name: 'Claudia Gideon',
    action: 'marked the task done a day ago',
    imgSrc: 'images/person_1.jpg',
    unread: true
  },
  {
    id: 2,
    name: 'Alex Stafford',
    action: 'marked the task done a day ago',
    imgSrc: 'images/person_2.jpg',
    unread: true
  },
  {
    id: 3,
    name: 'Devin Richards',
    action: 'mentioned you in her comment on Invoices 2 days ago',
    imgSrc: 'images/person_3.jpg',
    unread: false
  },
  {
    id: 4,
    name: 'Alex Stafford',
    action: 'marked the task done a day ago',
    imgSrc: 'images/person_2.jpg',
    unread: false
  },
  {
    id: 5,
    name: 'Devin Richards',
    action: 'mentioned you in her comment on Invoices 2 days ago',
    imgSrc: 'images/person_3.jpg',
    unread: false
  },
];

function NotificationDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="content-not">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={5}>
            <Dropdown show={dropdownOpen} onToggle={toggleDropdown} className="custom-dropdown custom-dropdown-not">
              <Dropdown.Toggle as="a" href="#" className="dropdown-link" id="dropdownMenuButton">
                <span className="wrap-icon icon-notifications">
                  <IoIosNotifications color='white' />
                  <span className="number">{notificationsdata.filter(notification => notification.unread).length}</span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className={dropdownOpen ? 'active' : ''} style={{ width: '400px', top: '45px' }} align="right" aria-labelledby="dropdownMenuButton">
                <div className="title-wrap d-flex align-items-center">
                  <h3 className="title mb-0">Notifications</h3>
                  <a href="#" className="small ml-auto">Mark all as read</a>
                </div>

                <ul className="custom-notifications">
                  {notificationsdata.map(notification => (
                    <li key={notification.id} className={notification.unread ? 'unread' : ''}>
                      <a href="#" className="d-flex">
                        <div className="img mr-3">
                          <img src={notification.imgSrc} alt="Image" className="img-fluid" />
                        </div>
                        <div className="text">
                          <strong>{notification.name}</strong> {notification.action}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-center m-0 p-0"><a href="#" className="small">View All</a></p>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Navv = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <nav className="bg-dark">

      <div className="container px-2 px-sm-3 px-lg-4">
        <div className="position-relative d-flex align-items-center justify-content-between" style={{ height: "4rem" }}>
          <div className="position-absolute top-0 start-0 d-flex align-items-center d-sm-none">
            {/* Mobile menu button */}
            <button
              type="button"
              className="btn btn-light btn-sm rounded-pill px-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="d-flex flex-grow-1 align-items-center justify-content-center flex-sm-grow-0 flex-sm-fill">
            <div className="d-flex flex-shrink-0 align-items-center">
              <img className="h-2" src="images/min-logo-81x69.png" alt="Your Company" />
            </div>
            <div className="d-none d-sm-block ml-6">
              <div className="d-flex gap-4">

                <a href="#" className="rounded-md bg-dark px-3 py-2 text-sm font-medium text-white" aria-current="page"><Link to='/es-adminLogin'>Dashboard</Link></a>

                <Link to='/es-adminLogin'>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-dark hover:text-white">Log In</a>
                </Link>
                <Link to='/es-adminLogin'>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-dark hover:text-white">Log In</a>
                </Link>
                <Link to='/es-adminLogin'>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-dark hover:text-white">Log In</a>
                </Link>
                {/* <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-dark hover:text-white">Projects</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-dark hover:text-white">Calendar</a> */}
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 end-0 d-flex align-items-center pe-2 sm-static sm-auto-end sm-ml-6 sm-pe-0">
            <button type="button" className="position-relative rounded-circle bg-gray-800 p-1 text-gray-400 hover:text-white focus-outline-none focus-ring-2 focus-ring-white focus-ring-offset-2 focus-ring-offset-gray-800">
              <span className="position-absolute start-0 top-0 translate-middle border-0" />
              <span className="visually-hidden">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button onClick={toggleDropdown} type="button" className="position-relative d-flex rounded-circle bg-gray-800 text-sm focus-outline-none focus-ring focus-ring-2 focus-ring-white focus-ring-offset-2 focus-ring-offset-gray-800" id="user-menu-button" aria-expanded={isDropdownOpen} aria-haspopup="true">
                  {/* Ahmed */}
                  <span className="position-absolute inset-1.5" />
                  <span className="visually-hidden">Open user menu</span>
                  <img className="w-2 h-2 rounded-circle" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
                </button>
              </div>
              {isDropdownOpen && (
                <div className="position-absolute right-0 mt-2 bg-white rounded shadow-lg border ring-1 ring-black ring-opacity-5 focus-outline-none" style={{ zIndex: '10', width: '12rem' }} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  <a href="#" className="dropdown-item" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="dropdown-item" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                  <Link to='/es-adminLogin'>
                    <a href="#" className="dropdown-item" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="d-none d-sm-block" id="mobile-menu">
          <div className="py-2 px-2">
            <a href="#" className="btn btn-primary btn-sm" aria-current="page">Dashboard</a>
            <a href="#" className="btn btn-sm btn-secondary rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#" className="btn btn-sm btn-secondary rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#" className="btn btn-sm btn-secondary rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
          </div>
        </div>
      )}

    </nav>
  );
};


function Dashboard() {
  return (
    <>      
          <div className="">
            <div className="row justify-content-center">
              <div className="col-lg-8 d-flex m-5 p-5" >
                <div className="">
                  <div className="">
                    <BarChart
                      series={[{ data: [35, 44, 24, 34, 35, 44, 60] }]}
                      height={290}
                      width={600}
                      xAxis={[{ data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], scaleType: 'band' }]}
                      margin={{ top: 10, bottom: 30, left: 40, right: 0 }}
                    />
                  </div>
                </div>


                <div>
                <Example/>
                </div>


              </div>

            </div>

          </div>

          
    </>
  );
}






const data01 = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data01}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
























function Tablau() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [Conf, setConf] = useState(false);
  const [IdEdit, setIdEdit] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const mapping = currentItems.map((el) => {
    if (el.id !== IdEdit) {
      return (
        <tr key={el.id}>
          <th scope="row">{el.id}</th>
          <td>{el.first_name + ' ' + el.last_name}</td>
          <td>{el.gender}</td>
          <td>{el.email}</td>
          <td>
            <button className="btn btn-primary" onClick={() => setIdEdit(el.id)}>Edit</button>
            <button className="btn Btnad btn-danger" onClick={() => setConf(true)}>Delete</button>
          </td>
        </tr>
      );
    }
    return (
      <tr key={el.id}>
        <th scope="row">
          <input type="text" value={el.id} />
        </th>
        <td>
          <input type="text" value={el.first_name + ' ' + el.last_name} />
        </td>
        <td>
          <input type="text" value={el.gender} />
        </td>
        <td>
          <input type="text" value={el.email} />
        </td>
        <td>
          <button className="btn Btnad btn-primary" onClick={() => setIdEdit('')}>Valider</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row flex-lg-nowrap">
              <div className="col mb-3">
                <div className="e-panel card">
                  <div className="card-body">
                    <div className="e-table">
                      <div className="table-responsive table-lg mt-3">
                        <table className="table table-striped table-hover table-primary">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Full name</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Email</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>{mapping}</tbody>
                        </table>
                      </div>
                      {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClick} />}
                      {Conf && <ConfirmationAlert />}
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
}


function Pagination({ totalPages, currentPage, handleClick }) {
  const maxPageNumbersToShow = 10;
  const halfRange = Math.floor(maxPageNumbersToShow / 2);

  let startPage, endPage;
  if (totalPages <= maxPageNumbersToShow) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfRange) {
    startPage = 1;
    endPage = maxPageNumbersToShow;
  } else if (currentPage + halfRange >= totalPages) {
    startPage = totalPages - maxPageNumbersToShow + 1;
    endPage = totalPages;
  } else {
    startPage = currentPage - halfRange;
    endPage = currentPage + halfRange;
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handleClick(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

function ConfirmationAlert() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export function SignIn() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleSubmit = () => {
    // Add your email validation logic here
    if (email.trim() === '') {
      setAlertMessage('Please enter your email address');
    } else {
      setAlertMessage(`We'll check your email: ${email}. If you have an account, we will send you a password.`);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="flex justify-center items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                      <span className="h1 fw-bold mb-0">EasyStudy</span>
                      <sub><b>admin</b></sub>
                    </div>{!showForgotPassword ? (
                      <>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4 text-center">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn Btnad btn-primary btn-lg btn-block" type="button" onClick={handleSubmit} style={{ width: '170px' }}>Login</button>
                        </div>
                        <p className="text-center">
                          <Link to="/es-admin/Dashbord">
                            <button className="btn Btnad btn-link" onClick={handleForgotPassword}>Forgot Password?</button>
                          </Link>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-center">Enter your email address to reset your password:</p>
                        <div data-mdb-input-init className="form-outline mb-4 p-3">
                          <input type="email" id="form2Example27" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <label className="form-label" htmlFor="form2Example27">Email address</label>
                        </div>
                        <div className="pt-1 mb-4 text-center">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn Btnad btn-primary btn-lg btn-block" type="button" onClick={handleSubmit} style={{ width: '170px' }}>Submit</button>
                        </div>
                      </>
                    )}
                    {alertMessage && (
                      <div className="alert alert-info">{alertMessage}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('+1 123 456 789');
  const [location, setLocation] = useState('New York, NY, USA');
  const [showAlert, setShowAlert] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    setShowAlert(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              {showAlert && (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                  Profile updated successfully!
                  <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
                </div>
              )}
              {isEditing ? (
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
                  </div>
                  <button type="button" className="btn btn-primary me-3" onClick={handleSaveProfile}>Save</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
              ) : (
                <>
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Profile"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{name}</h4>
                      <p className="text-secondary mb-1">Web Developer</p>
                      <p className="text-muted font-size-sm">Location: {location}</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      {email}
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      {phone}
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      {location}
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-primary me-2" onClick={handleEditProfile}>Edit Profile</button>
                    <button className="btn btn-danger">Delete Profile</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function TablePost() {
  const [currentPage, setCurrentPage] = useState(1);
  const [Conf, setConf] = useState(false);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Articles.slice(indexOfFirstItem, indexOfLastItem);

  // Check if pagination is needed
  const totalPages = Articles.length > itemsPerPage ? Math.ceil(Articles.length / itemsPerPage) : 1;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const mapping = currentItems.map((el) => (
    <tr key={el.id}>
      <th scope="row">{el.id}</th>
      <td>
        <img src={el.ImgUrl} width={25} height={25} alt="article" />
      </td>
      <td>{el.title}</td>
      <td>{el.price}</td>
      <td>
        <button className="btn Btnad btn-danger" onClick={() => setConf(true)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row flex-lg-nowrap">
              <div className="col mb-3">
                <div className="e-panel card">
                  <div className="card-body">
                    <div className="e-table">
                      <div className="table-responsive table-lg mt-3">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Image</th>
                              <th scope="col">Title</th>
                              <th scope="col">Price</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>{mapping}</tbody>
                        </table>
                      </div>
                      {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClick} />}
                      {Conf && <ConfirmationAlert />}
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
}

function TableSingial() {
  const [currentPage, setCurrentPage] = useState(1);
  const [Conf, setConf] = useState(false);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Siginiales.slice(indexOfFirstItem, indexOfLastItem);

  // Check if pagination is needed
  const totalPages = Articles.length > itemsPerPage ? Math.ceil(Articles.length / itemsPerPage) : 1;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const mapping = currentItems.map((el) => (
    <tr key={el.id}>
      <th scope="row">{el.id}</th>
      <td>{el.idPost}</td>
      <td>{el.idSignialer}</td>
      <td>{el.rapport}</td>
      <td>
        <button className="btn Btnad btn-danger" onClick={() => setConf(true)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="container">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row flex-lg-nowrap">
              <div className="col mb-3">
                <div className="e-panel card">
                  <div className="card-body">
                    <div className="e-table">
                      <div className="table-responsive table-lg mt-3">
                        <table className="table table-striped table-hover ">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">id Post</th>
                              <th scope="col">id Signialer</th>
                              <th scope="col">rapport</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>{mapping}</tbody>
                        </table>
                      </div>
                      {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClick} />}
                      {Conf && <ConfirmationAlert />}
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
}


function AddAdmin({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Admin</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body" style={{ height: '50%' }}>
            <div className="py-1">
              <form className="form" noValidate>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John Smith" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Username</label>
                          <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="johnny.s" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control" type="text" placeholder="user@example.com" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 mb-3">
                    <div className="mb-2"><b>Change Password</b></div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Current Password</label>
                          <input className="form-control" type="password" placeholder="••••••" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>New Password</label>
                          <input className="form-control" type="password" placeholder="••••••" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                          <input className="form-control" type="password" placeholder="••••••" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">Save </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateAdmin({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Admin</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-1">
              <form className="form" noValidate>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John Smith" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Username</label>
                          <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="johnny.s" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control" type="text" placeholder="user@example.com" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">Save Changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TablauAdmin() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [Conf, setConf] = useState(false);
  const [IdEdit, setIdEdit] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const mapping = currentItems.map((el) => {
    if (el.id !== IdEdit) {
      return (
        <tr key={el.id}>
          <th scope="row">{el.id}</th>
          <td>{el.first_name + ' ' + el.last_name}</td>
          <td>{el.gender}</td>
          <td>{el.email}</td>
          <td>
            <div className="btn-group align-top">
              <button className="btn btn-sm btn-outline-secondary badge" type="button" onClick={() => setIdEdit(el.id)}>Edit</button>
              <button className="btn btn-sm btn-outline-secondary badge" type="button" onClick={() => setConf(true)}><i className="fa fa-trash" /></button>
            </div>
          </td>
        </tr>
      );
    }
    return (
      <>
        <tr key={el.id}>
          <th scope="row">
            <input type="text" value={el.id} />
          </th>
          <td>
            <input type="text" value={el.first_name + ' ' + el.last_name} />
          </td>
          <td>
            <input type="text" value={el.gender} />
          </td>
          <td>
            <input type="text" value={el.email} />
          </td>
          <td>
            <button className="btn btn-sm btn-outline-secondary badge" type="button" onClick={() => setIdEdit('')}>Valider</button>
          </td>
        </tr>

      </>
    );
  });


  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleOpenEditModal = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col">
              <div className="row flex-lg-nowrap">
                <div className="col mb-3">
                  <div className="e-panel card">
                    <div className="card-body">
                      <div className="card-title d-flex">
                        <h3 className="mr-2">
                          <span>Users</span>
                          <small className="px-1">Be a wise leader</small>
                        </h3>
                        <div className="text-center px-xl-3">
                          <button className="btn btn-success btn-block" type="button" onClick={handleOpenCreateModal}>
                            New User
                          </button>
                        </div>
                        <div className="form-group">
                          <div>
                            <input className="form-control w-100" type="text" placeholder="Search by Name" />
                          </div>
                        </div>
                      </div>
                      <div className="e-table">
                        <div className="table-responsive table-lg mt-3">
                          <table className="table table-striped table-hover table-primary">
                            <thead>
                              <tr>
                                <th>Id</th>
                                <th className="max-width">Name</th>
                                <th className="sortable">Genre</th>
                                <th className="sortable">Email</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="align-middle">
                                  <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                                    1
                                  </div>
                                </td>
                                {/* <td className="align-middle text-center">
                                  <div className="bg-light d-inline-flex justify-content-center align-items-center align-top" style={{ width: 35, height: 35, borderRadius: 3 }}>
                                    <i className="fa fa-fw fa-photo" style={{ opacity: '0.8' }} />
                                  </div>
                                </td> */}
                                <td className="text-nowrap align-middle">Adam Cotter</td>
                                <td className="text-nowrap align-middle"><span>male</span></td>
                                <td className="text-nowrap align-middle"><span>AyoubEL@gmail.com</span></td>
                                {/* <td className="text-center align-middle"><i className="fa fa-fw text-secondary cursor-pointer fa-toggle-on" /></td> */}
                                <td className="text-center align-middle">
                                  <div className="">
                                    <button className="btn btn-sm btn-outline-secondary badge" type="button" onClick={handleOpenEditModal}>Edit</button>
                                    <button className="btn btn-sm btn-outline-secondary badge" type="button" onClick={() => setConf(true)}><i className="fa fa-trash" /></button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tbody>{mapping}</tbody>
                          </table>
                        </div>
                        {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClick} />}
                        {Conf && <ConfirmationAlert />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AddAdmin isOpen={isCreateModalOpen} onClose={handleCloseCreateModal} />
              <UpdateAdmin isOpen={isEditModalOpen} onClose={handleCloseEditModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}