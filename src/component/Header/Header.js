import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '../../assets/images/logo.png'
//css
import style from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className={style.header}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className={style.logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about-us">AboutUs</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#worked">Where I've Worked</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#contact-me">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
