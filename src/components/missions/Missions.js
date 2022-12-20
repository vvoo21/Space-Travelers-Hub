import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';
import '../../styles/missions.css';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

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
                <tr key={mission.id} className="border table-row-body">
                  <td className="mission-name">{mission.name}</td>
                  <td className="mission-description">{mission.description}</td>
                  <td className="mission-badge">
                    <p
                      className="badge-not-member"
                      style={{ display: mission.reserved ? 'none' : 'flex' }}
                    >
                      NOT A MEMBER
                    </p>
                    <p
                      className="badge-menber"
                      style={{ display: mission.reserved ? 'flex' : 'none' }}
                    >
                      Active Member
                    </p>
                  </td>
                  <td className="border mission-buttons">
                    <button
                      id={mission.id}
                      className="join-button"
                      type="button"
                      onClick={() => handleJoin(mission.id)}
                      style={{ display: mission.reserved ? 'none' : 'block' }}
                    >
                      Join Mission
                    </button>
                    <button
                      id={mission.id}
                      className="leave-button"
                      type="button"
                      onClick={() => handleJoin(mission.id)}
                      style={{ display: mission.reserved ? 'block' : 'none' }}
                    >
                      Leave Mission
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Missions;
