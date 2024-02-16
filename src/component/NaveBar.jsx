import React from 'react';
import { Link } from 'react-router-dom';

const NaveBar = () => {
    return (
      <div>
        <nav>
          <Link to="/"> All</Link>
          <Link to="/fullstackdevelopment"> FULL STACKDEVELOPMENT</Link>
          <Link to="/datascience"> DATA SCIENCE</Link>
          <Link to="/cybersecurity"> CYBERSECURITY</Link>
          <Link to="/career"> CAREER</Link>
        </nav>
      </div>
    );
};

export default NaveBar;