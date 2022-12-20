import { useState } from 'react';
import Mission from './Mission';

const missions = [
  {
    name: 'Thaicom',
    id: '9D1B7E0',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
];

const Missions = () => {
  const [state] = useState(missions);

  return (
    <>
      <div className="container">
        <section className="missions-container">
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th aria-label="button" />
              </tr>
            </thead>
            <tbody>
              {state.map((mission) => (
                <Mission key={mission.id} name={mission.name} description={mission.description} />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Missions;
