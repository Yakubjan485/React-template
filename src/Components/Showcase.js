import React from 'react'
import { FaHome, FaBuilding, FaClock, FaThumbsUp } from "react-icons/fa";
import Slider from "./Slider"
import Features from './Features';
const Showcase = () => {
     return (
          <main>
         <section className="showcase">
              <div className="container">
                   <div className="row flex-column">
                        <div className="col-4 offset-4">
                             <h5 className="text-center font-roboto-medium">WELCOME TO OUR</h5>
                        </div>
                        {/*  */}
                        <div className="col-8 offset-2">
                             <h6 className="text-center font-roboto-bold text-white mt-4 mb-5">CLEAN ,MODERN, MULTIPURPOSE THEME</h6>
                        </div>
                        <div className="col-8 offset-2">
                             <p className="text-center font-robot-light text-white">OUR TEAM OF PROFESSIONALS WILL HELP YOU TURN YOUR DREAM HOME OR FLAT INTO A REALITY FAST. THE LOVE BOAT PROMISES SOMETHING FOR EVERYONE. NOW THE WORLD DON'T MOVE TO THE BEAT OF JUST ONE</p>
                        </div>
                        {/*  */}
                        <div className="col-4 offset-4">
                             <p className="text-center mt-5">
                             <a className="text-decoration-none font-roboto-black" href="#">READ MORE</a>
                             </p>
                        </div>

                   </div>

              </div>
         </section>
         {/* stop show case */}
         <section className="icons-part">
              <div className="container">
                   <div className="row">
                        <div className="col-3">
                             <div className="card text-center border-0">
                                 <span className="text-center">
                                       <FaHome />
                                 </span>
                                  <div className="card-body text-center">
                                       <h6 className="font-roboto-bold mb-3">Professional Builde</h6>
                                       <p className="font-roboto-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                  </div>
                             </div>
                        </div>
                        {/*  */}
                        <div className="col-3">
                             <div className="card text-center border-0">
                                 <span className="text-center">
                                       <FaBuilding />
                                 </span>
                                  <div className="card-body text-center">
                                       <h6 className="font-roboto-bold mb-3">We Deliver Quality</h6>
                                       <p className="font-roboto-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                  </div>
                             </div>
                        </div>
                        {/*  */}
                        <div className="col-3">
                             <div className="card text-center border-0">
                                 <span className="text-center">
                                       <FaClock />
                                 </span>
                                  <div className="card-body text-center">
                                       <h6 className="font-roboto-bold mb-3">Always On Time</h6>
                                       <p className="font-roboto-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                  </div>
                             </div>
                        </div>
                        {/*  */}
                        <div className="col-3">
                             <div className="card text-center border-0">
                                 <span className="text-center">
                                       <FaThumbsUp />
                                 </span>
                                  <div className="card-body text-center">
                                       <h6 className="font-roboto-bold mb-3">We Are Pasionate</h6>
                                       <p className="font-roboto-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </section>
         {/* stop icons part */}
         <section className="about">
              <div className="container">
                   <div className="row">
                        <div className="col-12">
                             <div className="multi-sentences mb-5">
                              <h5 className="text-center font-roboto-medium">ABOUT US</h5>
                             <p className="text-center font-roboto-medium">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                             </div>
                             
                        </div>
                        <div className="col-7">
                             <div className="card border-0">
                                  <div className="card-body">
                                       <h1>WHO WE ARE</h1>
                                       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                  </div>
                                  {/*  */}
                                  <div className="card-footer bg-white border-0">
                                       <a href="#" className="text-decoration-none font-roboto-bold">
                                            CONTACT NOW
                                       </a>
                                  </div>

                             </div>
                        </div>
                        {/*  */}
                        <div className="col-5">
                             <img src="/img/about_client.jpg" alt="ssfsf" className="w-100" />
                        </div>
                   </div>
              </div>
         </section>
         {/* about */}
         <Slider />
         <Features />

          </main>
         
     )
}

export default Showcase
