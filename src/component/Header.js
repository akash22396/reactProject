import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {

    render() {
        const isLoggin = false
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink className="navbar-brand" to="/">Hidden brand</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></NavLink>
                                </li> 
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/Posts">Posts </NavLink>
                            </li>
                            { isLoggin ?
                            <div>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/Login">Login </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/Sign-up">Sign In </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="btn btn-outline-light" to="/Card"><i className='fa fa-shopping-cart fa-lg'></i> Cart </NavLink>
                            </li> </div>
                            : null
                        }

                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header

