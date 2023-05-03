/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import loginImage from "../../assets/register.webp"

const Registration = () => {
    return (
        <div className='container mt-5 py-5 w-75'>
            <h2 className='text-center fw-bold pb-3'>Register Now</h2>
            <div className='d-flex justify-content-between'>
                <form className='border border-2 p-4 rounded-4 w-50'>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                    <div className='d-flex justify-content-center align-items-center pt-2'>
                        <p>--------------- </p><h4 className='pb-2'>&ensp; or &ensp;</h4><p> ---------------</p>
                    </div>
                    <div className='text-center'>
                        <span className='px-3 fs-2'><FaGoogle></FaGoogle></span>
                        <span className='px-3 fs-2'><FaGithub></FaGithub></span>
                    </div>
                </form>
                <img className='w-50' src={loginImage}></img>
            </div>
        </div>
    );
};

export default Registration;