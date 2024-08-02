
import {Navbar, Container, Nav} from 'react-bootstrap'
import React from 'react';


import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const NavBar = () => {


  return (
    <div className="boxNav">
        <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home" aria-controls='basic-navbar-nav' className='fs-3 fw-bold'>Reifal.hs-xfx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-end">
            {navLinks.map((link) => {
              return(
                <div className='nav-link' key={link.id}>
                  <NavLink  to={link.path}>{link.text}</NavLink>
                </div>
              )
            })}
          </Nav>
          <div className='boxIcons text-end'>
            <a href="https://github.com/Reifalhs">
              <FaGithub className='iconGit'/>
            </a>
            <a href="https://discord.gg/WSgDuBFW9V">
            <FaDiscord className='iconGit'/>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar