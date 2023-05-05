/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {Form } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Send form data to server or perform desired action
    };

    return (
        <div className='border border-secondary container pb-5 my-5 rounded-4'>
            <h2 className='text-center pt-5 pb-4 pw-bold '>Contact Us</h2>
            <Form className='container w-50' onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label className='fw-bold'>Message</Form.Label>
                    <Form.Control className='mb-3' as="textarea" rows={3} placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </Form.Group>

                <button style={{ background: "#00a90b" }} className=' text-white rounded-2 py-1 px-3 fw-bold'>Submit</button>
            </Form>
        </div>
    );
}
export default Contact;
