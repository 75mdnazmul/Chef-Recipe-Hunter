/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg'
import profile from "../../assets/profile.webp"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import ActiveLink from '../../Routers/ActiveLink/ActiveLink';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(currentUser.displayName);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: "#0000009e" }} collapseOnSelect expand="lg" fixed="top" className='p-0 '>
                <Container>
                    <Link to="/"><img style={{ width: "70px", height: "50px" }} src={logo}></img></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <ActiveLink to="/"><span className="p-4">Home</span></ActiveLink>
                            <ActiveLink to="/blog"><span className="p-4">Blog</span></ActiveLink>
                            <ActiveLink to="/errorpage"><span className="p-4">ErrorPage</span></ActiveLink>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <img style={{ width: "40px" }} title={user.email} className='rounded-circle mx-2 border border-2 border-white' src={ user.photoURL == "" ? profile : user.photoURL} alt="Profile photo"></img>
                                        <button onClick={handleSignOut} style={{ background: "#00a90b" }} className=' text-white rounded-2 py-1 px-3 fw-bold'>Log Out</button>
                                    </>
                                    :
                                    (
                                    <>
                                    <Link to="/login"><button style={{ background: "#00a90b" }} className=' text-white rounded-2 py-1 px-3 fw-bold me-1'>Login</button></Link>
                                    <Link to="/register"><button style={{ background: "#00a90b" }} className=' text-white rounded-2 py-1 px-3 fw-bold'>Sign Up</button></Link>
                                    </>
                                    )
                            }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div >
    );
};

export default Navber;