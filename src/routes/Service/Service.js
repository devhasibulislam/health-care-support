import React from 'react';

const Service = ({ service }) => {
    const { name, description, photo } = service;
    return (
        <section className='col-4 d-flex'>
            <div>
                <img src={photo} alt="service_logo" className='mw-100' />
            </div>
            <div className='ms-2'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Service;