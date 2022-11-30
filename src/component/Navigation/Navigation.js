import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const navStyle={
        textDecoration:"none",
        color:"#B2BEB5",
        padding:"10px"
    }
    return (
        <Navbar bg="light" variant="light" >
        <Container>
        <Navbar.Brand to="/home">E-Core</Navbar.Brand>
        <Nav className="me-auto" >
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} to="/home">Home</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} to="/service">Service</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} to="/training">Training</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} to="/about">About Us</NavLink>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Navigation;