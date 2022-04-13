import React from 'react';
import image from '../../../images/cartoon-character-little-boy-points-260nw-1550040197.webp'

const NotFound = () => {
      return (
        <div className="mx-auto d-flex justify-content-center">
          <div>
            <img className="mx-auto" src={image} alt="" />
            <h1 className="text-danger ">Page not found</h1>
          </div>
        </div>
      );
};

export default NotFound;