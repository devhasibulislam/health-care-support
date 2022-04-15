import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='vh-100'>
            <h2>This is ServiceDetail component: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;