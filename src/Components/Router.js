import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from "./Footer"
import Showcase from "./Showcase"
import About from "./Pages/About"
const Router = () => {
     return (
          <BrowserRouter>
          <Navbar />
          <Switch>
               <Route path="/" exact component={Showcase}  />
               <Route path="/about" exact component={About} />
          </Switch>
          <Footer />

          </BrowserRouter>
     )
}

export default Router
