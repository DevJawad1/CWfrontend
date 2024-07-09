import React, { useEffect } from 'react';
import '../css/style.css'
import carouselimg1 from '../img/carousel-1.jpg'
import carouselimg2 from '../img/carousel-2.jpg'
import carouselimg3 from '../img/carousel-3.jpg'
import aboutImg from '../img/about.jpg'

import imgteam1 from '../img/team-1.jpg'
import imgteam2 from '../img/team-2.jpg'
import imgteam3 from '../img/team-3.jpg'
import imgteam4 from '../img/team-4.jpg'

import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
import testimonial4 from '../img/testimonial-4.jpg'
import '../lib/owlcarousel/owl.carousel.min.js'
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/counterup/counterup.min.js'
import '../js/main.js'
import Navbar from '../component/Navbar';
import Toplabel from '../component/Toplabel';
const LandingPage = () => {
    useEffect(() => {

    })
    return (
        <>
            <div>
                {/* Top Bar Start */}
                    <Toplabel/>
                {/* Top Bar End */}

                {/* Nav Bar Start */}
                <Navbar/>
                {/* Nav Bar End */}
            </div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-img">
                            <img src={carouselimg1} alt="Image" />
                        </div>
                        <div className="carousel-text">
                            <h3>Washing & Detailing</h3>
                            <h1>Keep your Car Newer</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                            </p>
                            <a className="btn btn-custom" href="">Explore More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img">
                        <img src={carouselimg2} alt="Image" />
                    </div>
                    <div className="carousel-text">
                        <h3>Washing & Detailing</h3>
                        <h1>Quality service for you</h1>
                        <p>
                            Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales
                        </p>
                        <a className="btn btn-custom" href="">Explore More</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img">
                        <img src={carouselimg3} alt="Image" />
                    </div>
                    <div className="carousel-text">
                        <h3>Washing & Detailing</h3>
                        <h1>Exterior & Interior Washing</h1>
                        <p>
                            Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam
                        </p>
                        <a className="btn btn-custom" href="">Explore More</a>
                    </div>
                </div>
                <button class="carousel-control-prev border text-black" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{height:"50px", width:"50px", borderRadius:"50%", position:"absolute", top:"25%"}}>
                    <span class="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
                    {/* <span class="visually-hidden">Previous</span> */}
                </button>
                <button class="carousel-control-next border" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{height:"50px", width:"50px", borderRadius:"50%", position:"absolute", top:"25%"}}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span class="visually-hidden">Next</span> */}
                </button>
            </div>
            {/* <div className="carousel">
                <div className="container-fluid">
                    <div className="owl-carousel" style={{ border: "1px solid" }}>

                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carouselimg1} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Keep your Car Newer</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                                </p>
                                <a className="btn btn-custom" href="">Explore More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carouselimg2} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Quality service for you</h1>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales
                                </p>
                                <a className="btn btn-custom" href="">Explore More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={carouselimg3} alt="Image" />
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Exterior & Interior Washing</h1>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam
                                </p>
                                <a className="btn btn-custom" href="">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={aboutImg} alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <p>About Us</p>
                                <h2>car washing and detailing</h2>
                            </div>
                            <div className="about-content">
                                <p>
                                    Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum
                                </p>
                                <ul>
                                    <li><i className="far fa-check-circle"></i>Seats washing</li>
                                    <li><i className="far fa-check-circle"></i>Vacuum cleaning</li>
                                    <li><i className="far fa-check-circle"></i>Interior wet cleaning</li>
                                    <li><i className="far fa-check-circle"></i>Window wiping</li>
                                </ul>
                                <a className="btn btn-custom" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="container">
                    <div className="section-header text-center">
                        <p>What We Do?</p>
                        <h2>Premium Washing Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-car-wash-1"></i>
                                <h3>Exterior Washing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-car-wash"></i>
                                <h3>Interior Washing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-vacuum-cleaner"></i>
                                <h3>Vacuum Cleaning</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-seat"></i>
                                <h3>Seats Washing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-car-service"></i>
                                <h3>Window Wiping</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-car-service-2"></i>
                                <h3>Wet Cleaning</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-car-wash"></i>
                                <h3>Oil Changing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item">
                                <i className="flaticon-brush-1"></i>
                                <h3>Brake Reparing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="facts-text">
                                    <h3 data-toggle="counter-up">25</h3>
                                    <p>Service Points</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="fa fa-user"></i>
                                <div className="facts-text">
                                    <h3 data-toggle="counter-up">350</h3>
                                    <p>Engineers & Workers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="fa fa-users"></i>
                                <div className="facts-text">
                                    <h3 data-toggle="counter-up">1500</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="facts-item">
                                <i className="fa fa-check"></i>
                                <div className="facts-text">
                                    <h3 data-toggle="counter-up">5000</h3>
                                    <p>Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Become a Member</p>
                        <h2>Choose Your Plan</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="price-item">
                                <div className="price-header">
                                    <h3>Basic Cleaning</h3>
                                    <h2><span>$</span><strong>25</strong><span>.99</span></h2>
                                </div>
                                <div className="price-body">
                                    <ul>
                                        <li><i className="far fa-check-circle"></i>Seats Washing</li>
                                        <li><i className="far fa-check-circle"></i>Vacuum Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Exterior Cleaning</li>
                                        <li><i className="far fa-times-circle"></i>Interior Wet Cleaning</li>
                                        <li><i className="far fa-times-circle"></i>Window Wiping</li>
                                    </ul>
                                    <span>Special</span>
                                    <ul style={{borderTop:"1px solid", width:"50%", margin:"auto"}}>
                                        <li><i className="far fa-times-circle"></i>Home service</li>
                                        <li><i className="far fa-times-circle"></i>Pickup adn delivery</li>
                                    </ul>
                                </div>
                                <div className="price-footer">
                                    <a className="btn btn-custom" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-item featured-item">
                                <div className="price-header">
                                    <h3>Premium Cleaning</h3>
                                    <h2><span>$</span><strong>35</strong><span>.99</span></h2>
                                </div>
                                <div className="price-body">
                                    <ul>
                                        <li><i className="far fa-check-circle"></i>Seats Washing    </li>
                                        <li><i className="far fa-check-circle"></i>Vacuum Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Exterior Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Interior Wet Cleaning</li>
                                        <li><i className="far fa-times-circle"></i>Window Wiping</li>
                                    </ul>
                                    <span>Special</span>
                                    <ul style={{borderTop:"1px solid", width:"50%", margin:"auto"}}>
                                        <li><i className="far fa-check-circle"></i>Home service</li>
                                        <li><i className="far fa-times-circle"></i>Pickup adn delivery</li>
                                    </ul>
                                </div>
                                <div className="price-footer">
                                    <a className="btn btn-custom" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-item">
                                <div className="price-header">
                                    <h3>Complex Cleaning</h3>
                                    <h2><span>$</span><strong>49</strong><span>.99</span></h2>
                                </div>
                                <div className="price-body">
                                    <ul>
                                        <li><i className="far fa-check-circle"></i>Seats Washing</li>
                                        <li><i className="far fa-check-circle"></i>Vacuum Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Exterior Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Interior Wet Cleaning</li>
                                        <li><i className="far fa-check-circle"></i>Window Wiping</li>
                                    </ul>
                                    <span>Special</span>
                                    <ul style={{borderTop:"1px solid", width:"50%", margin:"auto"}}>
                                        <li><i className="far fa-check-circle"></i>Home service</li>
                                        <li><i className="far fa-check-circle"></i>Pickup adn delivery</li>
                                    </ul>
                                </div>
                                <div className="price-footer">
                                    <a className="btn btn-custom" href="">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Meet Our Team</p>
                        <h2>Our Staff & Workers</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam1} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Donald John</h2>
                                    <p>Engineer</p>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam2} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>Engineer</p>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam3} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Thomas Olsen</h2>
                                    <p>Worker</p>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam4} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>James Alien</h2>
                                    <p>Worker</p>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Testimonial</p>
                        <h2>What our clients say</h2>
                    </div>
                    <div className="owl-carousel testimonials-carousel">
                        <div className="testimonial-item">
                            <img src={testimonial1} alt="Image" />
                            <div className="testimonial-text">
                                <h3>Client Name</h3>
                                <h4>Profession</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <img src={testimonial2} alt="Image" />
                            <div className="testimonial-text">
                                <h3>Client Name</h3>
                                <h4>Profession</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <img src={testimonial3} alt="Image" />
                            <div className="testimonial-text">
                                <h3>Client Name</h3>
                                <h4>Profession</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <img src={testimonial4} alt="Image" />
                            <div className="testimonial-text">
                                <h3>Client Name</h3>
                                <h4>Profession</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <h2>Get In Touch</h2>
                                <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                <p><i className="fa fa-envelope"></i>info@example.com</p>
                                <div className="footer-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Popular Links</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Our Service</a>
                                <a href="">Service Points</a>
                                <a href="">Pricing Plan</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Useful Links</h2>
                                <a href="">Terms of use</a>
                                <a href="">Privacy policy</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-newsletter">
                                <h2>Newsletter</h2>
                                <form>
                                    <input className="form-control" placeholder="Full Name" />
                                    <input className="form-control" placeholder="Email" />
                                    <button className="btn btn-custom">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">Gold Touch</a>, All Right Reserved. Designed By <a href="https://htmlcodex.com">Jawad</a></p>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to top button --> */}
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

            {/* <!-- Pre Loader --> */}
            {/* <div id="loader" clasx */}
        </>
    );
}

export default LandingPage;


