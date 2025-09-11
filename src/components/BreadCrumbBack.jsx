import "../assets/components/breadcrumbback.scss";

import { NavLink } from "react-router-dom";

const BreadCrumbBack = ({ links, pageName }) => {
  return (
    <>
      <div className="breadcrumb-and-back">
        <div className="breadcrumb-container">
          {links.map(({ to, label }) => (
            <>
              <NavLink to={to} className="breadcrumb">
                {label}
              </NavLink>
              <span style={{ color: "#5d8100", margin: "0 10px" }}> /</span>
            </>
          ))}
          <p className="neutral">{pageName}</p>
        </div>
        <div className="back">
          <NavLink to={links.at(-1).to}>← Voltar</NavLink>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbBack;
