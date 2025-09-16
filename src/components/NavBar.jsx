import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/influx-logo-dark.svg"; // descomente se tiver logo
import "../assets/components/navBar.scss";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/#service", label: "Serviços" },
  { to: "/products", label: "Produtos" },
  { to: "/#footer", label: "Contatos" },
  { to: "/#footer", label: "Sobre a Influx" },
];

const NavBar = () => {
  const [showNavColumn, handleShowNavColumn] = useState(false);

  return (
    <header className="header">
      <div className="nav-center">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" className="nav-logo img" />
        </Link>
        <nav
          className={`navbar ${showNavColumn ? "nav-column" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to} className="nav-item">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="btn-hamburguer"
          onClick={() => handleShowNavColumn((current) => !current)}
        />
      </div>
    </header>
  );
};

export default NavBar;
