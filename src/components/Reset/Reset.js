import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Reset = () => {
    const emailRef = useRef('');
    const handleSubmitResetForm = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;

        console.log(email);
    };
    return (
        <div className='my-5 container mx-auto'>
            <h2 className='text-center display-1'>Reset Page!</h2>
            <Form onSubmit={handleSubmitResetForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset account
                </Button>
            </Form>
        </div>
    );
};

export default Reset;