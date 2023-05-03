/* eslint-disable no-unused-vars */
import React from 'react';
import loginImage from "../../assets/login.webp"
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mt-5 mb-5 py-5 w-75'>
            <h2 className='text-center fw-bold pb-3'>Login Now!</h2>
            <div className='d-flex justify-content-between'>
                <img style={{ width: "400px" }} src={loginImage}></img>
                <form className='border border-2 p-4 rounded-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary form-control"><b>Submit</b></button>
                    <div className='d-flex justify-content-center align-items-center pt-2'>
                        <p>--------------- </p><h4 className='pb-2'>&ensp; or &ensp;</h4><p> ---------------</p>
                    </div>
                    <div className='text-center'>
                        <span className='px-3 fs-2'><FaGoogle></FaGoogle></span>
                        <span className='px-3 fs-2'><FaGithub></FaGithub></span>
                    </div>
                    <p className='text-center pt-3 mb-0'>If you new to Fast Food ? Then <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;