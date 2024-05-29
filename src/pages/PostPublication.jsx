import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { CgAdd } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import { IoCallSharp } from 'react-icons/io5';
import { MdOutlineStarHalf } from 'react-icons/md';

import ReactDOM from 'react-dom';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export default function PostPublication() {
    return (<>



        <section class="section" id="product">
            <div class="container">
                <div class="row" style={{ justifyContent: 'space-between' }}>


                    <div class="col-lg-8">
                        <ImagesPub />
                    </div>


                    <div class="col-lg-4">
                        <Cardd />
                    </div>


                </div>
            </div>
        </section>

    </>
    );
}


function Cardd(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };

    const dispatch = useDispatch()
    return (<>
        <div class="right-content right-contentPub">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>Illustration</h4>
                <div className="authorP" > By <span className="nameP" style={{}}>Abi</span> 4 days ago</div>
            </div>
            <div className='Reactionuser' style={{}}>
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
                <div className='addicon'>
                    <span className='' style={{}} onClick={toggleIcon}>{isCircleCheck ? <CgAdd size={26} /> : <CiCircleCheck size={26} color="green" />}</span>
                </div>
                {/* PLus */}

            </div>
            <span className='descriptionPub'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis ducimus obcaecati doloremque molestias nihil animi provident deleniti iure ipsum aliquam illum quod corporis possimus aspernatur praesentium rerum, in ab!
            </span>
            <div class=" quantity-contentPub">
                <Button><IoCallSharp /></Button>
                <Button><MdOutlineStarHalf size={20} color='yellow' /></Button>
                <Button>Go somewhere</Button>

            </div>
        </div>
    </>
    );

}
// function Cards() {
//   const Posts = useSelector((data) => data.Post);
//   const ToggelAside = useSelector((state) => state.ToggelAside);

//   const mapping = Posts.map((el) => (
//     <div id='' className={ToggelAside ? 'ccad side-sahow' : 'ccad'}>
//       <Cardd img={el.photos[0]} title={el.title} desc={el.description} key={el.id} el={el} />
//     </div>
//   ));

//   return (

//     <div className='cardz'>{mapping}</div>


//   );
// }

function ImagesPub() {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (<>

<div className='max-w-[90vh] h-[80vh] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>	
        </>
    );
}