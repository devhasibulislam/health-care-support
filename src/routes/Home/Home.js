import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();
    return (
        <section className='mb-5'>
            {/* health care support */}
            <section className='d-flex align-items-center justify-content-center p-5'>
                <div>
                    <h1 className='display-1'>Health Care & Support</h1>
                    <p className='text-muted'>Care Your Health & Lead A Happy Life With Your Family.</p>
                    <Button variant="primary rounded-pill px-4">
                        <Link to={'/services'} className='text-white text-decoration-none'>Browse Services</Link>
                    </Button>
                </div>
                <div>
                    <img src="images/banner.svg" alt="hero_image" className='mw-100'/>
                </div>
            </section>
            <section className="container mx-auto">
                {/* hello doctor */}
                <section className='d-flex align-items-center justify-content-center p-5 bg-white mb-5 shadow'>
                    <div>
                        <img src="images/aboutus.svg" alt="about_us" className='mw-100' />
                    </div>
                    <div className='ms-5'>
                        <h2 className='d-inline-block border-bottom border-3 border-primary'>Hello Doctor</h2>
                        <p className='pt-3'>
                            Healthcare Support Limited (HSL) is one of the best kinds of company in the pharmaceutical industry in Bangladesh
                            The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable.
                        </p>
                        <Button variant="primary rounded-pill px-4">
                            <Link to={'/appointment'} className='text-white text-decoration-none'>Get Appointment</Link>
                        </Button>
                    </div>
                </section>
                {/* our services */}
                <section>
                    <h2 className='d-inline-block border-bottom border-3 border-primary mb-4'>Our Services</h2>
                    <div className="row g-3 d-flex">
                        {
                            services.slice(0, 3).map(service => <Service
                                key={service.key}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;