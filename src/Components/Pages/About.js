import React from 'react'

import {Link} from "react-router-dom"
import AboutShowcase from './AboutShowcase'
import Touch from "./Touch"
import Features from "../Features"
import Booking from './Booking'
import Constructor from '../Constructor'

const About = () => {
     return (
          <div>
          <div className="header">
               <div className="absolute"></div>
               <div className="container">
                    <div className="row">
                         <div className="col-12 margin">
                              <h1 className="text-center">ABOUT US</h1>
                              <div className="col-sm-4 offset-sm-4 col-8 offset-2 d-flex justify-content-between text-center">
                                 <Link to="/" className="text-decoration-none ml-auto mr-auto text-white">Home</Link>  
                                 <Link to="/about" className="text-decoration-none ml-auto mr-auto">About Us</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <AboutShowcase />
          <Touch />
          <Features />
          <Booking />
          <Constructor />
          </div>
          
           

          // stop header
          
     )
}

export default About
