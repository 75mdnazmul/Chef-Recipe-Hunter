/* eslint-disable no-unused-vars */
import React from 'react';
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.jpg'


const Footer = () => {
    return (
        <div>
            <footer id="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4 pb-2">
                            <div className="footer-logo-part">
                                <div className="footer-logo">
                                    <a href="#"><img style={{ width: "100px", height: "80px" }} src={logo}></img>
                                    </a>
                                </div>
                                <p className="footer-logo-text">
                                    Afghan cuisine is known for its rich and flavorful dishes that are influenced by its neighboring countries like Iran, India, and Pakistan.
                                    One of the most popular dishes in Afghan cuisine is Kabuli pulao, a hearty rice dish made with lamb or beef, raisins, carrots, and nuts.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 pt-3">
                            <div className="footer-Course">
                                <div className="foot-Course-head">
                                    <h3>Cooking category</h3>
                                    <ul className="foot-course-list">
                                        <li><a href="#">Rice Dishes</a></li>
                                        <li><a href="#">Meat Dishes</a></li>
                                        <li><a href="#">Bread</a></li>
                                        <li><a href="#">Vegetarian Dishes</a></li>
                                        <li><a href="#">Desserts</a></li>
                                        <li><a href="#">Beverages</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 pt-3">
                            <div className="footer-Required">
                                <div className="Required-head">
                                    <h3>Spacial food</h3>
                                </div>
                                <div className="Required-list">
                                    <ul>
                                        <li><a href="#">Kabuli Pulao</a></li>
                                        <li><a href="#">Bolani</a></li>
                                        <li><a href="#">Mantu</a></li>
                                        <li><a href="#">Ashak</a></li>
                                        <li><a href="#">Kebabs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 pt-3">
                            <div className="">
                                <h3 className="">Contact</h3>
                                <ul className=''>
                                    <li>
                                        <h6 className='text-white'>Tel No: 92387576</h6>
                                    </li>
                                    <li>
                                        <h6 className='text-white'>Email: <a href="">fresh@food.com</a></h6>
                                    </li>
                                    <li>
                                        <h6 className='text-white'>Website: <a href="">www.freshfood.com</a></h6>
                                    </li>
                                    <li>
                                        <h6 className='text-white '>Social:</h6>
                                        <div className="foot-logo-icon pt-3 ">
                                            <i><FaFacebookF></FaFacebookF></i>
                                            <i><FaYoutube></FaYoutube></i>
                                            <i><FaTwitter></FaTwitter></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="Copyright">
                    <p className="copyright">
                        Copyright &#169; 2023 Fresh Food. All rights reserved
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default Footer;