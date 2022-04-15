import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, photo, key } = service;
    const navigate = useNavigate();
    const navigateToService = (key) => {
        navigate(`/serviceDetail/${key}`);
    };
    return (
        <section className='col-lg-4 col-md-6 d-flex'>
            <div>
                <img src={photo} alt="service_logo" className='mw-100' />
            </div>
            <div className='ms-2'>
                <h5>{name}</h5>
                <p>{description}</p>
                <button className='btn btn-outline-primary rounded-pill' onClick={() => navigateToService(key)}>Take this service</button>
            </div>
        </section>
    );
};

export default Service;