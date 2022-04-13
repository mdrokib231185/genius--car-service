import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
      const { id, name, img, description, price } = service;
      const navigate= useNavigate()
      const navigateToServiceDetails = id => {
            navigate(`/service/${id}`)
      }

      return (
        <div className="service">
          <img src={img} alt="" />
          <h1>Name: {name}</h1>
          <p>{description}</p>
          <h3>Price: {price}</h3>
          <button
            onClick={()=>navigateToServiceDetails (id)}
            className="btn btn-primary mt-5"
          >
            Booking {name}
          </button>
        </div>
      );
};

export default Service;