import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import '../styles/navigation.css';

const Navigation = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  const activeClassName = 'underline';
  return (
    <nav className="nav-bar">
      <a href="#/">
        <img src={logo} alt="logo" className="nav-logo" />
        <h1 className="nav-logo-title">Space Travelers&apos; Hub</h1>
      </a>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Missions"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <div className="vertical-divider" />
        <li>
          <NavLink to="My Profile">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                My Profile
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
