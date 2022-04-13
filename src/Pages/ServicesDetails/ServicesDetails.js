import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
      const {serviceId} = useParams()
      return (
            <div>
                  <h1>This is service{serviceId }</h1>
            </div>
      );
};

export default ServicesDetails;