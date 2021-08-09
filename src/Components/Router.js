import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

const Router = () => {
     return (
          <BrowserRouter>
          <Navbar />
          <Switch>
               <Route  />
          </Switch>
          </BrowserRouter>
     )
}

export default Router
