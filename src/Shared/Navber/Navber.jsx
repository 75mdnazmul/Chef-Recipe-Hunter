/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg'
import profile from "../../assets/profile.webp"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navber = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

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
                            <Link className='text-decoration-none text-white fw-bold px-3' to="/errorpage">ErrorPage</Link>
                        </Nav>
                        <Nav>
                            {
                                user ? 
                                <>
                                <img style={{ width: "40px" }} title={user.email} className='rounded-circle mx-2 border border-2 border-white' src={profile} alt="Profile photo"></img> 
                                <button onClick={handleSignOut} style={{background:"#00a90b"}} className=' text-white rounded-2 py-1 px-3 fw-bold'>Sign Out</button>
                                </>
                                : 
                                <>
                                <Link to="/login"><button style={{background:"#00a90b"}} className=' text-white rounded-2 py-1 px-3 fw-bold'>Login</button></Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;