import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Showcase from "./Showcase"

const Router = () => {
     return (
          <BrowserRouter>
          <Navbar />
          <Switch>
               <Route path="/" exact component={Showcase}  />
          </Switch>
          </BrowserRouter>
     )
}

export default Router
