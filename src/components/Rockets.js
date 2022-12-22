import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rocketsList.map((r) => (
        <Rocket key={r.id} rocket={r} />
      ))}
    </div>
  );
};

export default Rockets;
