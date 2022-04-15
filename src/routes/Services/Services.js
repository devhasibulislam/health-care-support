import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='p-5 vh-100'>
            <h2 className='d-inline-block mx-auto border-bottom border-3 border-primary mb-4'>Our Services</h2>
            <div className='row g-5'>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;