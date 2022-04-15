import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const navigate = useNavigate();
    
    if (user) {
        navigate('/home');
    }

    const handleSubmitLoginForm = (event) => {
        event.preventDefault();
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

        // console.log(email, password);
        console.log(user);
    };
    return (
        <div className='my-5 container mx-auto'>
            <h2 className='text-center display-1'>Login Page!</h2>
            <Form onSubmit={handleSubmitLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3 mb-0'>Forgot password? <span role="button">
                <Link to={'/reset'} className='text-danger'>reset this</Link>
            </span></p>
            <p className=''>Don't have an account? <span role="button">
                <Link to={'/register'} className='text-primary'>create one</Link>
            </span></p>
        </div>
    );
};

export default Login;