import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../Hooks/useServiceDetails';

const ServicesDetails = () => {
  const { serviceId } = useParams()
  const [service] = useServiceDetails(serviceId)
      return (
        <div>
          <h1>You are about to book: {service.name}</h1>
          <div className="text-center">
            <Link to={`/checkout/${serviceId}`}>
              <button className="btn btn-primary">Procced Checout</button>
            </Link>
          </div>
        </div>
      );
};

export default ServicesDetails;