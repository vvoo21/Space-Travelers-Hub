import React from 'react';
import Rocket from './Rocket';

class Rockets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rocketsList: [
        {
          rocket_id: '1',
          rocketName: 'Folcone 1',
          rocketDescriptions: 'to form the Dragons section 11111',
        },
        {
          rocket_id: '2',
          rocketName: 'Folcone 2',
          rocketDescriptions: 'to form the Dragons section 2222',
        },
        {
          rocket_id: '3',
          rocketName: 'Folcone 3',
          rocketDescriptions: 'to form the Dragons section 3333',
        },
      ],
    };
  }

  render() {
    const { rocketsList } = this.state;
    return (
      <div className="rockets-container">
        {rocketsList.map((rocket) => (
          <Rocket
            key={Math.random()}
            rocket_id={rocket.rocket_id}
            name={rocket.rocketName}
            description={rocket.rocketDescriptions}
          />
        ))}
      </div>
    );
  }
}

export default Rockets;
