import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function PostPublication() { 
return ( 
	<section className='NavPub'>
        <div className="contenuePub">

        </div>
        <div className="vadrPub">
      <h1> CSS-ONLY carouselPub </h1>
      <h2> (no, <u>really</u>) </h2>

      <div className="center centerPub" id="center">
        <div className="carousel-wrapper carousel-wrapperPub">
          {/* abstract radio buttons for slides */}
          <input id="slide1" type="radio" name="controls" defaultChecked />
          <input id="slide2" type="radio" name="controls" />
          <input id="slide3" type="radio" name="controls" />
          <input id="slide4" type="radio" name="controls" />
          <input id="slide5" type="radio" name="controls" />

          {/* navigation dots */}
          <label htmlFor="slide1" className="nav-dot nav-dotPub"></label>
          <label htmlFor="slide2" className="nav-dot nav-dotPub"></label>
          <label htmlFor="slide3" className="nav-dot nav-dotPub"></label>
          <label htmlFor="slide4" className="nav-dot nav-dotPub"></label>
          <label htmlFor="slide5" className="nav-dot nav-dotPub"></label>

          {/* arrows */}
          <label htmlFor="slide1" className="left-arrow left-arrowPub"> &lt; </label>
          <label htmlFor="slide2" className="left-arrow left-arrowPub"> &lt; </label>
          <label htmlFor="slide3" className="left-arrow left-arrowPub"> &lt; </label>
          <label htmlFor="slide4" className="left-arrow left-arrowPub"> &lt; </label>
          <label htmlFor="slide5" className="left-arrow left-arrowPub"> &lt; </label>

          <label htmlFor="slide1" className="right-arrow right-arrowPub"> &gt; </label>
          <label htmlFor="slide2" className="right-arrow right-arrowPub"> &gt; </label>
          <label htmlFor="slide3" className="right-arrow right-arrowPub"> &gt; </label>
          <label htmlFor="slide4" className="right-arrow right-arrowPub"> &gt; </label>
          <label htmlFor="slide5" className="right-arrow right-arrowPub"> &gt; </label>

          <div className="carousel carouselPub">
            <ul>
              <li>
                <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/canyon.jpg" alt="Slide 1" />
              </li>
              <li>
                <img src="https://m.media-amazon.com/images/I/31Y+R3Y3nvL._SL1000_.jpg" alt="Slide 2" />
              </li>
              <li>
                <img src="https://raw.githubusercontent.com/osef-art/ministick/main/data/img/main/ministick-clip-3.gif" alt="Slide 3" />
              </li>
              <li>
                <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/smoke.jpg" alt="Slide 4" />
              </li>
              <li>
                <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="Slide 5" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
); 
}
