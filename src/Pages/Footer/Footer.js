import React from 'react';

const Footer = () => {
      const today = new Date()
      const year = today.getFullYear()
      return (
            <div className='text-center'>
                  copy right all reserverd by Rokib {year}
            </div>
      );
};

export default Footer;