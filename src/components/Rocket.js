import React from 'react';
import PropTypes from 'prop-types';
import Falcone from './images/Falcon_.jpg';

function Rocket({ name, description }) {
  return (
    <div className="rocket-container">
      <div className="rocket-details-container">
        <div className="img-container">
          <img src={Falcone} alt="rocket-img" width={150} />
        </div>
        <div className="rocket-details">
          <span className="rocket-name">{name}</span>
          <span className="rocket-description">{description}</span>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
