import React, { useState } from 'react';
// import './style2.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { FaBell, FaGlobeAmericas } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import { BsTranslate } from 'react-icons/bs';

import '../css/Acceuil.css';


// import '../Home/css/Styleaside.css';
// import '../Home/assets/dropdown/js/navbar-dropdown';
// import '../Home/assets/dropdown/css/style.css';
// import { Helmet } from 'react-helmet';

// import '../Home/assets/mobirise/css/mbr-additional.css'


// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { CgAdd } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import Footer from './welcome/footer';

// import { BootstrapIcons } from 'react-bootstrap-icons';



function Acceuil(props) {
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
        setToggel('sidebarAside');
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
                                    <span style={{ fontSize: '30px', cursor: 'pointer', backgroundColor: 'red;' }} id="toggel" onClick={open}>☰</span>
                                ) : (
                                    <span style={{ fontSize: '30px', cursor: 'pointer', backgroundColor: 'red    ;' }} id="toggel" onClick={close}>X</span>
                                )}
                            </button>
                            <span class="navbar-logoB">
                                <a href="">
                                    <img src="/images/min-logo-81x69.png" alt="Mobirise Website Builder" className='h-2rem' />
                                </a>
                            </span>
                        </div>

                        <div class="mr-3" id="navbarSupportedContent">
                            <div class="icons-menu">
                                <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                                    <FaBell />
                                </a>
                                <a class="iconfont-wrapper mr-3" href="#" target="_blank">
                                    <IoMdListBox />
                                </a>
                                {/* Langues */}
                                <div class="frere">
                                    <FaGlobeAmericas color='black' />
                                    <select name="" class="Langue">
                                        <option value="en">EN</option>
                                        <option value="fra">FRA</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Main class={toggel} idd={toggeliD} />
            {/* <Footer /> */}
        </>
    );
}

// Search+Cards
function Main(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };


    return (
        <main id='contentAll' >
            <aside id="mySidenav" className={props.class}>
                {/* <!-- sidebarAside --> */}

                <aside id="sidebarAside">
                    <div class="header">
                        <a href="#">My App</a>
                    </div>
                    <ul class="nav navAside">
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-link"></i> Shortcuts
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-widgets"></i> Overview
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-calendar"></i> Events
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-info-outline"></i> About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-settings"></i> Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="zmdi zmdi-comment-more"></i> Contact
                            </a>
                        </li>
                    </ul>
                </aside>
            </aside>
            <section id={props.idd} className="content-section p-4 p-md-5 pt-5">
                <Search />
                <Cards />
            </section>
        </main>
    );
}





export { Main };
function Cardd(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };

    const dispatch = useDispatch()
    return (<>

        <div className="cardP" >
            <div className="cardP-image"></div>
            <div className="contntS" >
                <div className="categoryP"> Illustration </div>
                <div className="headingP"> A headingP that must span over two lines</div>
                <Button>Go somewhere</Button>
                <div style={{ display: "flex", justifyContent: 'normal', marginTop: '4px;', paddingLeft: '15px' }}>
                    {/* <!-- j'aime --> */}
                    <label className="ui-bookmarkPP">
                        <input type="checkbox" />
                        <div className="bookmarkP">
                            <svg viewBox="0 0 16 16" style={{}} className="bi bi-heart-fill" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" fill-rule="evenodd" ></path>
                            </svg>
                        </div>
                    </label>
                    {/* <!-- Add --> */}
                    <div>
                        <span className='m-auto' style={{ width: "24px;" }} onClick={toggleIcon}>{isCircleCheck ? <CgAdd /> : <CiCircleCheck />}</span>
                    </div>
                    {/* PLus */}

                </div>
                <div className="authorPPrice"> By <span className="nameP">Abi</span> 4 days ago</div>
            </div>
        </div>
    </>
    );

}
// Cadrs
function Cards() {
    const Posts = useSelector((data) => data.Post);
    const ToggelAside = useSelector((state) => state.ToggelAside);

    const mapping = Posts.map((el) => (
        <div id='' className={ToggelAside ? 'ccad side-sahow' : 'ccad'}>
            <Cardd img={el.photos[0]} title={el.title} desc={el.description} key={el.id} el={el} />
        </div>
    ));

    return (

        <div className='cardz'>{mapping}</div>


    );
}

function Search(props) {
    return (
        <div className="card-margin col-lg-10  mr-auto card-marginSearch">
            <div className="card cardsearch search-form search-formsearch">
                <div className="card-body p-0">
                    <form id="search-form search-formsearch">
                        <div className="row">
                            <div className="col-12">
                                <div className="row no-gutters">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Location</option>
                                            <option>London</option>
                                            <option>Boston</option>
                                            <option>Mumbai</option>
                                            <option>New York</option>
                                            <option>Toronto</option>
                                            <option>Paris</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                        <input type="text" placeholder="Search..." className="form-control" id="search" name="search" />
                                    </div>
                                    <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                        <button type="submit" className="btn btn-base">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-search">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <main className='maineFilter'>
                <div className="settingsFilter">
                    <div class=" choicesFilter -text">
                        <input type="radio" name="blend-mode" value="multiply" id="blend-multiply" checked />
                        <label tabindex="0" for="blend-multiply">Global</label>
                        <input type="radio" name="blend-mode" value="normal" id="blend-none" />
                        <label tabindex="0" for="blend-none">Home</label>

                        <input type="radio" name="blend-mode" value="screen" id="blend-screen" />
                        <label tabindex="0" for="blend-screen">Job</label>
                        <input type="radio" name="blend-mode" value="overlay" id="blend-overlay" />
                        <label tabindex="0" for="blend-overlay">Food</label>
                        <input type="radio" name="blend-mode" value="darken" id="blend-darken" />
                    </div>
                </div>
                <div>
                    <PriceRangeSlider />
                </div>
            </main>
        </div>
    )
}

const PriceRangeSlider = () => {
    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);
    const priceGap = 1000;

    const handleMinPriceChange = (e) => {
        const newMinPrice = parseInt(e.target.value);
        if ((maxPrice - newMinPrice >= priceGap) && maxPrice <= 10000) {
            setMinPrice(newMinPrice);
        }
    };

    const handleMaxPriceChange = (e) => {
        const newMaxPrice = parseInt(e.target.value);
        if ((newMaxPrice - minPrice >= priceGap) && newMaxPrice <= 10000) {
            setMaxPrice(newMaxPrice);
        }
    };

    const handleRangeMinChange = (e) => {
        const newMinVal = parseInt(e.target.value);
        if ((maxPrice - newMinVal) >= priceGap) {
            setMinPrice(newMinVal);
        } else {
            setMinPrice(maxPrice - priceGap);
        }
    };

    const handleRangeMaxChange = (e) => {
        const newMaxVal = parseInt(e.target.value);
        if ((newMaxVal - minPrice) >= priceGap) {
            setMaxPrice(newMaxVal);
        } else {
            setMaxPrice(minPrice + priceGap);
        }
    };

    const rangeMinPercentage = (minPrice / 10000) * 100;
    const rangeMaxPercentage = ((10000 - maxPrice) / 10000) * 100;

    return (
        <div className="" id="wrapperMMPrice">
            <header className='header'>
                <h2 id='A'>Price Range</h2>
            </header>
            <div className="price-input" id='price-inputMMPrice'>
                <div className="field" id='fieldMMPrice'>
                    <span>Min</span>
                    <input type="number" className="input-min" value={minPrice} onChange={handleMinPriceChange} />
                </div>
                <div className="separatorPrice">-</div>
                <div className="field" id='fieldMMPrice'>
                    <span>Max</span>
                    <input type="number" className="input-max" value={maxPrice} onChange={handleMaxPriceChange} />
                </div>
            </div>
            <div className="slider" id='sliderMMPrice'>
                <div className="progress" id='progressMMPrice' style={{ left: `${rangeMinPercentage}%`, right: `${rangeMaxPercentage}%` }}></div>
            </div>
            <div className="range-input" id='range-inputMMPrice'>
                <input type="range" className="range-min" min="0" max="10000" value={minPrice} step="100" onChange={handleRangeMinChange} />
                <input type="range" className="range-max" min="0" max="10000" value={maxPrice} step="100" onChange={handleRangeMaxChange} />
            </div>
        </div>
    );
};


export default Acceuil;