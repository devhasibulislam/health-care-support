import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../components/CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src="images/logo.png" alt="header-logo" className='mw-100 w-75' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="/appointment">Appointment</Nav.Link>
                            <Nav.Link as={CustomLink} to="/Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;