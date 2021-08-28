import React, { Component } from 'react'
import { FaWrench, FaRocket, FaUsers } from "react-icons/fa";
export default class Features extends Component {
     render() {
          return (
               <section className="features">
                    <div className="container">
                         <div className="row">
                              <div className="col-12 mb-5">
                                   <div className="multi-sentences">
                                        <h5 className="text-center">OUR FEATURES</h5>
                                        <p className="text-center">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                                   </div>
                              </div>
                              {/*  */}
                              <div className="col-lg-6 col-10 mb-5">
                                   <img src="/img/feature-man.jpg" alt="cscscs" className="w-100" />
                              </div>
                              {/*  */}
                              <div className="col-lg-6 col-12 right-side">
                                   <h2 className="font-roboto-bold">WHY CHOOSE US</h2>
                                   <p>There are many variations of passages of Lorem Ipsum available.</p>
                                   <div className="card border-0">
                                        <div className="card-body d-flex">
                                             <div>
                                                  <a href="#">
                                                       <FaWrench />
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div>
                                                  <h3>	30+ YEARS OF EXPERIENCE</h3>
                                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                  
                                             </div>
                                        </div>
                                        {/*  */}
                                        <div className="card-body d-flex">
                                             <div>
                                                  <a href="#">
                                                       <FaRocket />
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div>
                                                  <h3>QUALIFIED EXPERTS</h3>
                                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                  
                                             </div>
                                        </div>
                                        {/*  */}
                                        <div className="card-body d-flex">
                                             <div>
                                                  <a href="#">
                                                       <FaUsers />
                                                  </a>
                                             </div>
                                             {/*  */}
                                             <div>
                                                  <h3>	BEST CUSTOMER SERVICES</h3>
                                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                  
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </section>
          )
     }
}

