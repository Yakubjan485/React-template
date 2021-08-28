import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlus, FaLinkedinIn, FaChevronRight, FaEnvelope, FaPhoneAlt, FaMapMarker } from "react-icons/fa";
const Footer = () => {
     return (
          <footer>
               <div className="absolute"></div>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-3 col-md-6 mb-5">
                              <h6>ABOUT OUR COMPANY</h6>
                              <img src="/img/footer-logo.png" alt="vsv" />
                              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                              <div className="d-flex align-items-center social">
                                   <a href="#" className="text-decoration-none">
                                        <span>
                                             <FaFacebookF />
                                        </span>
                                   </a>
                                   {/*  */}
                                   <a href="#" className="text-decoration-none">
                                        <FaTwitter />
                                   </a>
                                   {/*  */}
                                   <a href="#" className="text-decoration-none">
                                        <FaGooglePlus />
                                   </a>
                                   {/*  */}
                                   <a href="#" className="text-decoration-none">
                                        <FaLinkedinIn />
                                   </a>
                              </div>
                         </div>
                         {/*  */}
                         <div className="col-lg-3 col-md-6 mb-5">
                              <h6>QUICK LINKS</h6>
                              <ul className="nav flex-column">
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             
                                             Building Construction
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             Home Renovation
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             Hardwood Flooring
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             Repairing Of Roof
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             Commercial Construction
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none">
                                             <p>
                                                  <FaChevronRight />
                                             </p>
                                             Concreate Transport
                                        </a>
                                   </li>

                              </ul>
                         </div>
                         {/*  */}
                         <div className="col-lg-3 col-md-6 mb-5">
                              <h6>TWITTER FEED</h6>
                              <span className="d-block mb-3">@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</span>
                              {/*  */}
                              <span>@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</span>
                         </div>
                         {/*  */}
                         <div className="col-lg-3 col-md-6 mb-5">
                              <h6>CONTACT US</h6>
                              <p className="question">Have questions, comments or just want to say hello:</p>
                              <ul className="nav flex-column phone">
                                   <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none link">
                                             <i className="pr-3">
                                                  <FaEnvelope />

                                             </i>
                                             
                                             info@thethemspro.com
                                        </a>
                                   </li>
                                   {/*  */}
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none link">
                                             <i className="pr-3">
                                             <FaPhoneAlt />
                                             </i>
                                             +880 123 456 789
                                        </a>
                                   </li>
                                   {/*  */}
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-decoration-none link">
                                             <i className="pr-3"><FaMapMarker /></i>
                                             Sector # 10, Road # 05, Plot # 31, Uttara, Dhaka 1230
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    {/*  */}
               </div>
               <div className="footer-bottom">
                         <div className="col-12">
                              <p className="text-center">
                                   Copyright 2017 All rights reserved. Designed by
                                   <a href="#"> COLORLIB.</a>
                              </p>
                         </div>
                    </div>
          </footer>
     )
}

export default Footer
