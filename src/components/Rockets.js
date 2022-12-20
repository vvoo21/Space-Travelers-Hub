import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  console.log(rocketsList);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rocketsList.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket_id={rocket.rocket_id}
          name={rocket.rocket_name}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Rockets;
