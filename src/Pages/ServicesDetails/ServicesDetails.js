import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
      const {serviceId} = useParams()
      return (
        <div>
          <h1>This is service{serviceId}</h1>
          <div className='text-center'>
            <Link to={'/checkout'}>
              <button className='btn btn-primary'>Procced Checout</button>
            </Link>
          </div>
        </div>
      );
};

export default ServicesDetails;