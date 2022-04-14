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
            <section className='d-flex align-items-center justify-content-center p-5 container mx-auto flex-column flex-lg-row'>
                <div>
                    <h1 className='display-1'>Health Care & Support</h1>
                    <p className='text-muted'>Care Your Health & Lead A Happy Life With Your Family.</p>
                    <Button variant="primary rounded-pill px-4">
                        <Link to={'/services'} className='text-white text-decoration-none'>Browse Services</Link>
                    </Button>
                </div>
                <div>
                    <img src="images/banner.svg" alt="hero_image" className='mw-100' />
                </div>
            </section>
            <section className="container mx-auto">
                {/* hello doctor */}
                <section className='d-flex align-items-center justify-content-center p-5 bg-white mb-5 shadow flex-lg-row flex-column'>
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
                {/* customer conviction */}
                <section className='mt-5'>
                    <h2 className='d-inline-block border-bottom border-3 border-primary mb-4'>What Our Customer Say About Us</h2>
                    <div className='row g-5'>
                        <div className="col-lg-6 p-3" style={{ boxShadow: 'border-box' }}>
                            <p>
                                Health Care Support were all very friendly and helpful. I especially loved how Drs really took his time to explain my conditions with me as well as my treatment options. I had a great visit and the doctor's demeanor has really put me at ease so I highly recommend this clinic.
                            </p>
                            <h4 className='text-primary mb-0'>Sadia Dhira</h4>
                            <h5 className='text-muted'><small>Designer</small></h5>
                        </div>
                        <div className="col p-3 bg-white shadow" style={{boxShadow: 'border-box'}}>
                            <p>
                                From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient.
                            </p>
                            <h4 className='text-primary mb-0'>Sabbir Hossain</h4>
                            <h5 className='text-muted'><small>Developer</small></h5>
                        </div>
                    </div>
                </section>
                {/* need a doctor */}
                <section className='mt-5 p-5 d-flex justify-content-between bg-white shadow'>
                    <h2 className='mb-0'>Don't feel better, Need a doctor?</h2>
                    <button className='btn btn-primary rounded-pill px-5'>
                        <Link to={'/register'} style={{color: 'white', textDecoration: 'none'}}>Register Now</Link>
                    </button>
                </section>
            </section>
        </section>
    );
};

export default Home;