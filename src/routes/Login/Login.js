import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='my-5 container mx-auto'>
            <h2 className='text-center display-1'>Login Page!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3 mb-0'>Forgot password? <span className='text-danger' role="button">reset this</span></p>
            <p className=''>Don't have an account? <span className='text-primary' role="button">create one</span></p>
        </div>
    );
};

export default Login;