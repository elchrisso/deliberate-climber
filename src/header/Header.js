import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavbarBrand, Button } from 'reactstrap'
import { NavLink, withRouter } from 'react-router-dom'

class Header extends Component {
    state = {}
    render() { 
        return ( 
            <Navbar color="faded" className="fixed-top navbar-header" light toggleable>
                <NavbarBrand href="/">the deliberate climber</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link" to="/seasons" activeClassName="active">seasons</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/seasons/add">add season</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink className="nav-link" to="google.com">user</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
         )
    }
}
 
export default Header
