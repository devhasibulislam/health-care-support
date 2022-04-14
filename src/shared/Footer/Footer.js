import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-white py-3'>
            <p className='m-0 text-center'>Copyright © {year} All right reserved.</p>
        </div>
    );
};

export default Footer;