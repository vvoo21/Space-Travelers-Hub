import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <div className="container">
        <section className="profile-section">
          <div className="profile">
            <h2>My Missions</h2>
            <ul className="profile-list">
              {joinMissions.map((mission) => (
                <li className="profile-item" key={mission.id}>
                  <span className="profile-name">{mission.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="profile">
            <h2>My Rockets</h2>
            <ul className="profile-list">
              <li className="profile-item">
                <span className="profile-name">Rocket Name</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProfile;
