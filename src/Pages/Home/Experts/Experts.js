import React from 'react';
import Expert from '../Expert/Expert';

import experts1 from '../../../images/expert-1.jpg'
import experts2 from '../../../images/expert-2.jpg'
import experts3 from '../../../images/expert-3.jpg'
import experts4 from '../../../images/expert-4.jpg'
import experts5 from '../../../images/expert-5.jpg'
import experts6 from '../../../images/expert-6.png'

const Experts = () => {
      const experts = [
           {id: 1, name: 'Rokib' ,img:experts1},
           {id: 2, name: 'Sakib' ,img:experts2},
           {id: 3, name: 'Nuru' ,img:experts3},
           {id: 4, name: 'Akash' ,img:experts4},
           {id: 5, name: 'Milon' ,img:experts5},
           {id: 6, name: 'Habib' ,img:experts6}
     ]
      return (
        <div id='experts' className="container">
          <h1 className="text-primary text-center m-5">Our Expert</h1>

          <div className='row g-5'>
            {experts.map((expert) => (
              <Expert key={expert.id} expert={expert}></Expert>
            ))}
          </div>
        </div>
      );
};

export default Experts;