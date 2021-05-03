import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <div>
           <Nav>
           <NavLink to="/">Naija Food</NavLink>
           <NavIcon onClick={toggle}>
               <p>Menu</p>
               <Bars />
           </NavIcon>
           </Nav> 
        </div>
    )
}

export default Navbar
