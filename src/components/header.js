import React, { useState } from 'react'
import logo from '../img/Logo.png'
import Intro from './intro'
import App from '../App';
import Footer from './footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    
    return (
        <Router >
        <div>
            <nav className="navbar is-large" role="navigation" aria-label="main navigation">
                <div className="navbar-brand height-auto">
                    <a className="navbar-item" href="#" >
                    <img src={logo} width="80" height="200"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    {/* <a className="navbar-item"> */}
                        <Link className="navbar-item" to="/" >Nosotros</Link>
                    {/* </a> */}

                    {/* <a className="navbar-item"> */}
                        <Link className="navbar-item" to="/bookings">Reservaciones</Link>
                    {/* </a> */}
                </div>
            </div>
            </nav>
        </div>
        <Switch >
            <Route path="/bookings">
                <Footer />
                </Route> 
            <Route path="/" >
                <Intro />
                <App />
                <Footer />
            </Route>
        </Switch>
        </Router>
    )
}

export default Header