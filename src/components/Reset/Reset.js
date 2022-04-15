import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const handleSubmitResetForm = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;

        await sendPasswordResetEmail(email);

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
            {error && <p className='mt-4 text-danger'>{error.message}</p>}
            {sending && <p className='mt-4 text-danger'>sending...</p>}
        </div>
    );
};

export default Reset;