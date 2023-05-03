/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg'
import profile from "../../assets/profile.webp"
import { Link } from 'react-router-dom';

const Navber = () => {

    
    
    return (
        <div>
            <Navbar style={{backgroundColor:"#0000009e"}} collapseOnSelect expand="lg" fixed="top" className='p-0'>
                <Container>
                    <img style={{ width: "70px", height: "50px" }} src={logo}></img>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-white fw-bold px-3' to="/">Home</Link>
                            <Link className='text-decoration-none text-white fw-bold px-3' to="/blog">Blog</Link>
                            <Link className='text-decoration-none text-white fw-bold px-3' to="/login">Login</Link>
                        </Nav>
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="">
                                    <img style={{ width: "40px" }} className='rounded-circle' src={profile} alt=""></img>
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        Log Out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;