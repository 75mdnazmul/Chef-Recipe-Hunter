/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import loginImage from "../../assets/login.webp"
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const {logIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='container mt-5 mb-5 py-5 w-75'>
            <h2 className='text-center fw-bold pb-3'>Login Now!</h2>
            <div className='row  d-flex justify-content-between'>
                <img className='col-sm-12 col-lg-6' style={{ width: "450px" }} src={loginImage}></img>
                <form onSubmit={handleLogin} className='border border-2 p-4 rounded-4 col-sm-12 col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" name="email" required placeholder='Write your email here' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" name="password" placeholder='Write your password here' className="form-control" required id="exampleInputPassword1" />
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
                    <p className='text-center pt-3 mb-0'>If you new to Fresh Food ? Then <Link to="/register" className='text-decoration-underline'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;