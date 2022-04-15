import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const handleSubmitResetForm = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('reset password sent!');
        }

        console.log(email);
    };
    return (
        <div className='my-5 container mx-auto vh-100'>
            <h2 className='text-center display-1'>Reset Page!</h2>
            <Form onSubmit={handleSubmitResetForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset account
                </Button>
            </Form>
            {error && <p className='mt-4 text-danger'>{error.message}</p>}
            {sending && <p className='mt-4 text-danger'>sending...</p>}
            <ToastContainer />
        </div>
    );
};

export default Reset;