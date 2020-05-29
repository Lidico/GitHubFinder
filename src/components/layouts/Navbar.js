import React from 'react'
import './navbar.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = props => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-danger navbar-dark mb-3'>
                <h4 className='h4 text-light'>
                    <i className={props.icon}></i>
                    <span className='title d-none d-sm-inline-block'>{props.title}</span>
                    <span className='title d-nline-block d-sm-none '>{props.titleSmall}</span>
                </h4>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fa fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
