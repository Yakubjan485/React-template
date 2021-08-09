import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {

     const [show, setShow] = useState(false)

     return (
          <nav className="main-navbar navbar-light bg-light">
               <div className="container">
                    <div className="display">
                         <button type="button" className="d-md-none d-block icon" onClick={()=> setShow(!show)}>
                              <FaBars />
                         </button>
 
                    <div>
                     <Link to="/" className="navbar-brand d-md-block d-none">
                         <img src="/img/logo.png" alt="cczczc" />
                    </Link>
                    </div>
                    <div className={`${show ? 'links-container show-container' : 'links-container'}`}>
                         <Link to="/" className="navbar-brand d-md-none d-block">
                         <img src="/img/logo.png" alt="cczczc" />
                    </Link>
                         <ul className="nav-ul align-items-center">
                              <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>   
                              </li>
                              {/*  */}
                              <li className="nav-item">
                                <Link to="/" className="nav-link">About us</Link>   
                              </li>
                              {/*  */}
                              <li className="nav-item">
                                <Link to="/" className="nav-link">Services</Link>   
                              </li>
                              {/*  */}
                              <li className="nav-item">
                                <Link to="/" className="nav-link">Gallery</Link>   
                              </li>
                              {/*  */}
                              <li className="nav-item">
                                <Link to="/" className="nav-link">Blog</Link>   
                              </li>
                              {/*  */}
                              <li className="nav-item">
                                <Link to="/" className="nav-link">Contact</Link>   
                              </li>
                              <li className="nav-item">
                                    <a href="#" className="search nav-link">
                                         <FaSearch />
                                    </a>
                              </li>
                         </ul>
                         {/*  */}
                        
                    </div>
                    </div>
                   
                   

                    

                    

               </div>
          </nav>
     )
}

export default Navbar
