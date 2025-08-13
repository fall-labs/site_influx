import { NavLink } from 'react-router-dom';
// import logo from "../assets/logo.svg";
import classNames from 'classnames';
import "../assets/components/navBar.scss"

const NAV_ITEMS = [
  { to: '/home',       label: 'Home' },
  { to: '/aboutus',    label: 'About us' },
  { to: '/work',       label: 'How we work' },
  { to: '/ourworks',   label: 'Our works' },
  { to: '/contacts',   label: 'Contacts' },
];

const NavBar = ({ transparent = false, relative = false }) => {
  const headerClass = classNames('header', {
    transparent,
    solid: !transparent,
    relative,
  });

  return (
    <header className={headerClass}>
      <div className="nav-center">
        <NavLink to="/home" className="nav-logo">
          {/* <img src={logo} alt="Logo" /> */}
        </NavLink>

        <nav className="navbar" aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to} className="nav-item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    classNames('nav-link', { selected: isActive })
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;