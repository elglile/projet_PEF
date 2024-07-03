import React, {useState } from 'react';
import './css/style.css';
import Footer from './footer';
import  Nav from './nav';
import { Link } from 'react-router-dom';
// import './assets/mobirise/css/mbr-additional.css';

export default function Content(props) {
  const [close,setclose]=useState(false)
  const GetVal=(val)=>{
    if(val==='true'){
      setclose(true);
    }

  }
  if(close){
  return (
    <div >
        <Nav/>         
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </div>
)
  }
    return (
        <div >
          <Nav/>
            <Section1/>
            <Alert cc={GetVal}/>

        </div>
    );
}
function Section1() {
    return (
        <section data-bs-version="5.1" className="header1 cid-u8DKjyLmAN mbr-fullscreen" id="header01-5">
	
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                    <img className="w-100" src="assets/images/-6c43a1aa-fde0-4eaa-861b-f1f3dfac0fdc-removebg-preview-501x500.png" />
                </div>
                <div className="col-12 col-lg col-md-12">
                    <div className="text-wrapper align-left">
                        <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                            <strong>From creation to market</strong>
                        </h1>
                        <p className="mbr-text mbr-fonts-style mb-4 display-7">
                            Create awesome websites on your computer! No code &amp; free. Publish anywhere.
                        </p>
                        <div className="mbr-section-btn mt-3">
                            <a className="btn btn-danger display-7" href="#">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

function Section2 (){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"  class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(21).jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(41).jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="card">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="card">
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card d-none d-md-block">
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>
    )
}

function Section3(props) {
    return (
<section data-bs-version="5.1" class="header14 cid-sFzz5E692j" id="header14-1j">
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-6 image-wrapper">
            <img src="assets/images/mbr-1-1256x837.jpg" alt="Mobirise Website Builder"/>
        </div>
        <div class="col-12 col-md">
            <div class="text-wrapper">
                <h1 class="mbr-section-title mbr-fonts-style mb-3 display-2">
                    <strong>About Company</strong></h1>
                <p class="mbr-text mbr-fonts-style display-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa, efficitur varius augue. In vel elit lorem. Fusce et dui fringilla, suscipit nulla sed, viverra nunc. Nulla ut justo ut enim vehicula maximus. Nam et neque tempus.<br/><br/>Duis lobortis aliquam varius. Aliquam at metus at urna bibendum aliquet. Curabitur ut commodo ex, nec vehicula eros. Suspendisse dictum eu tortor id aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br/></p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4" href="https://mobiri.se">Read More</a></div>
            </div>
        </div>
    </div>
</div>
</section>
    );
}

const Section4 = () => {
    return (
<section data-bs-version="5.1" class="content10 cid-sFAZRnJnnI" id="content10-22">
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md">
                
                <h6 class="mbr-section-subtitle mbr-fonts-style mb-4 display-2"><strong>Why clients choose us?</strong></h6>
            </div>
            <div class="col-md-12 col-lg-6">
                <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam a nibh ut consectetur. Vestibulum nec massa a nisl condimentum mattis. Mauris semper risus dui, vitae pulvinar sapien rutrum in. Cras risus ante, porta vel volutpat vel, pulvinar in magna. Donec lacinia in mi eget pharetra.</p>
            </div>
        </div>
    </div>
</section>
    );
};

const Section5 = () => {
    return (
<section data-bs-version="5.1" class="contacts4 cid-sFAyMcKwph" id="contacts4-21">
<div class="container">
    <div class="row align-items-center justify-content-center">
        <div class="text-content col-12 col-md-6">
            <h2 class="mbr-section-title mbr-fonts-style display-2">
                <strong>Follow Us</strong>
            </h2>
            <p class="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa, efficitur varius augue. In vel elit lorem. Fusce et dui fringilla, suscipit nulla sed, viverra nunc. Nulla ut justo ut enim vehicula maximus. Nam et neque tempus, ultricies purus vel, suscipit leo. Praesent orci turpis, maximus facilisis rhoncus vel, consequat ac augue. Nam facilisis mi non elit tempor sodales.<br/></p>
        </div>
        <div class="icons d-flex align-items-center col-12 col-md-6 justify-content-end mt-md-0 mt-2 flex-wrap">
            <a href="https://twitter.com/mobirise" target="_blank">
                <span class="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
            <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
            <a href="https://www.youtube.com/c/mobirise" target="_blank">
                <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
            <a href="https://instagram.com/mobirise" target="_blank">
                <span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
            </a>
        </div>
    </div>
</div>

</section>

    );
};
const Section6= () => {
    return (
<section data-bs-version="5.1" class="contacts2 cid-sFzIA7KGYz " id="contacts2-1r">    
    
    <div class="container ">
        <div class="mbr-section-head">
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Contacts</strong>
            </h3>
            <h4 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div>
            <div className='d-flex'>
            <div class="card col-12 col-md-6">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <span class="mbr-iconfont mobi-mbri-phone mobi-mbri"></span>
                    </div>
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style mb-1 display-5">
                            <strong>Phone</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style display-7">
                            <a href="tel:+12345678910" class="text-primary">0 (800) 123 45 67</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-6">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                    </div>
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style mb-1 display-5">
                            <strong>Email</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style display-7">
                            <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div className='d-flex'>
            <div class="card col-12 col-md-6">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <span class="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
                    </div>
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style mb-1 display-5">
                            <strong>Address</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style display-7">
                            4100 Ross Street, Okawville, IL
                        </p>
                    </div>
                </div>
            </div>
            <div class="card col-12 col-md-6">
                <div class="card-wrapper">
                    <div class="image-wrapper">
                        <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
                    </div>
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style mb-1 display-5">
                            <strong>Working Hours</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style display-7">
                            9:00 - 18:00
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
    );
};


function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);
  const [SignUpp, setSignUpp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const closeAlert = () => {
    setShowAlert(false);
    props.cc('true');
  };

  const openForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleBack = () => {
    setForgotPassword(false);
  };

  if (forgotPassword) {
    return (
      <div id='alertt'>
        {showAlert && (
          <div className={`login-alert`}>
          <form className="form-Al">
          <span className="close-btn" onClick={closeAlert}>×</span>
          <br />
          {/* <p class="title-Al">Register </p> */}
          <p class="message-Al">Signup now and get full access to our app. </p>
              <div class="flex-Al">
          </div>  
          
          <label>
              <input class="input-Al" type="email" placeholder="" required=""/>
              <span>Enter your email</span>
          </label> 
          
          
          <button className="submit-Al">Submit</button>
          <p> <a href="#" onClick={handleBack}>Back</a> </p>
          <p className="signin-Al">Don't have an account? <a href="#" onClick={()=>{setSignUpp(true);}}>Sign Up</a> </p>
          </form>
          </div>
      )}
      </div>
  );
  } else if (SignUpp) {
  return (
      <div id='alertt'>
        {showAlert && (
          <div className={`login-alert`}>
              <form class="form-Al">
          <span className="close-btn" onClick={closeAlert}>×</span>
          <br />
              {/* <p class="title-Al">Register </p> */}
              <ul class="login-nav">
                  <li class="login-nav__item active">
                      <div onClick={()=>{setSignUpp(false);}}>Log In</div>
                  </li>
                  <li class="login-nav__item">
                      <div >Sign Up</div>
                  </li>
              </ul>
              <div class="flex-Al">
              <label>
                  <input class="input-Al" type="text" placeholder="" required=""/>
                  <span>Firstname</span>
              </label>

              <label>
                  <input class="input-Al" type="text" placeholder="" required=""/>
                  <span>Lastname</span>
              </label>
          </div>  
              
          <label>
              <input class="input-Al" type="email" placeholder="" required=""/>
              <span>Email</span>
          </label> 
          
          <label>
              <input class="input-Al" type="password" placeholder="" required=""/>
              <span>Password</span>
          </label>
          <label>
              <input class="input-Al" type="password" placeholder="" required=""/>
              <span>Confirm password</span>
          </label>
          <button class="submit-Al">Submit</button>
          <p class="signin-Al">Already have an acount ? <a href="#">Signin</a> </p>
          </form>
          </div>
        )}
      </div>
  );
  } else {
    return (
      <div id='a'>
        {showAlert && (
          <form className="form-Al login-alert">
            <span className="close-btn" onClick={closeAlert}>×</span>
            <br />
        {/* <p class="title-Al">Register </p> */}
      <ul class="login-nav">
    <li class="login-nav__item active">
      <div  >Log In</div>
    </li>
    <li class="login-nav__item">
      <div  onClick={()=>{setSignUpp(true);}}>Sign Up</div>
    </li>
  </ul>
  <p class="message-Al">Signup now and get full access to our app. </p>
      <div class="flex-Al">
  </div>  
          
  <label>
      <input class="input-Al" type="email" placeholder="" required=""/>
      <span>Email</span>
  </label> 
      
  <label>
      <input class="input-Al" type="password" placeholder="" required=""/>
      <span>Password</span>
  </label>
        <Link to='/acceuil'>         
            {/* <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" id='btn'>Send application</button> */}
            <button className="submit-Al w-100 m-10">Submit</button>
        </Link>
            {/* <button className="submit-Al">Submit</button> */}
            <p> <a href="#" onClick={openForgotPassword}>Forgot Password</a> </p>
            <p className="signin-Al">Don't have an account? <a href="#">Sign Up</a> </p>
          </form>
        )}
      </div>
    );
  }
}