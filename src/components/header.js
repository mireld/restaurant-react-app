import React from 'react'
import logo from '../img/Logo.png'
// import '../../node_modules/bulma/css/bulma.css'

const header = () => {
    return (
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
                <a className="navbar-item">
                    Nosotros
                </a>

                <a className="navbar-item">
                    Reservaciones
                </a>

                {/* <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    More
                    </a>

                    <div className="navbar-dropdown">
                    <a className="navbar-item">
                        About
                    </a>
                    <a className="navbar-item">
                        Jobs
                    </a>
                    <a className="navbar-item">
                        Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div> */}
            </div>

                {/* <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div> */}
            </div>
            </nav>
        </div>
    )
}

export default header