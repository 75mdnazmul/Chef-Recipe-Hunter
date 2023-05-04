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
                            <img style={{ width: "40px" }} title='' className='rounded-circle mx-2 border border-2 border-white' src={profile} alt="Profile photo"></img>
                            <Link to="/login"><button style={{background:"#00a90b"}} className=' text-white rounded-2 py-1 px-3 fw-bold'>Login</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;