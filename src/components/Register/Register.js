import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const nameRef = useRef('');
    // const emailRef = useRef('');
    // const passwordRef = useRef('');

    /* if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    } */

    const handleSubmitRegistrationForm = async (event) => {
        event.preventDefault();
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;

        // setName(nameRef.current.value);
        // setEmail(emailRef.current.value);
        // setPassword(passwordRef.current.value);

        await updateProfile({ displayName: name });

        createUserWithEmailAndPassword(email, password);

        // console.log(email, password, name);
        // console.log(user);
    };

    return (
        <div className='my-5 container mx-auto'>
            <h2 className='text-center display-1'>Registration Page!</h2>
            <Form onSubmit={handleSubmitRegistrationForm}>
                {/* for name */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={event => setName(event.target.value)}/>
                </Form.Group>
                {/* for email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                </Form.Group>
                {/* for password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>Already have an account? <span role="button">
                <Link to={'/login'} className='text-primary'>login here</Link>
            </span></p>
            {loading && <p className='mt-3'>Loading...</p>}
            {error && <p className='mt-3'>Error: {error.message}</p>}
            {/* {user && <p className='mt-3'>Registered User: {user.email}</p>} */}
        </div>
    );
};

export default Register;