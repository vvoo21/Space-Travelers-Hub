import { useSelector } from 'react-redux';
import Mission from './Mission';
import '../../styles/missions.css';

const Missions = () => {
  const state = useSelector((state) => state.missions);

  return (
    <>
      <div className="container">
        <section className="missions-container">
          <table className="border">
            <thead>
              <tr className="border">
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th aria-label="button" />
              </tr>
            </thead>
            <tbody>
              {state.map((mission) => (
                <Mission
                  key={mission.id}
                  name={mission.name}
                  description={mission.description}
                />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Missions;
