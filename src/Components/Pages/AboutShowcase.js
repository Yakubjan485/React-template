import React, { Component } from 'react'

export class AboutShowcase extends Component {
     render() {
          return (
               <section className="rescuer mt-5 mb-5">
                    <div className="container">
                         <div className="row">
                              <div className="col-12 mb-5">
                                   <div className="multi-sentences">
                                        <h5 className="text-center">ABOUT US</h5>
                                        <p className="text-center">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                                   </div>
                              </div>
                              <div className="col-lg-6 col-12 mb-5">
                                   <img src="/img/rescuer.jpg" alt="vdvd" className="w-100" />
                              </div>
                              {/*  */}
                              <div className="col-lg-6 col-12">
                                   <h1>WHO WE ARE</h1>
                                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                   <a className="text-decoration-none font-roboto-bold" href="#">CONTACT NOW</a>
                              </div>
                         </div>
                    </div>
               </section>
          )
     }
}

export default AboutShowcase
