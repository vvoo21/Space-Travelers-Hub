import { NavLink } from 'react-router-dom';
const Navigation = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  const activeClassName = 'underline';
  return (
    <nav>
      <a href="#/">
        <img src="../images/planet.png" alt="logo" />
        <h1>Space `Travelers&apos` Hub</h1>
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
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Missions
          </NavLink>
        </li>
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
