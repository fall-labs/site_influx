import "../assets/components/breadcrumbback.scss";
import Container from "./Container";
import { NavLink } from "react-router-dom";

const BreadCrumbBack = ({ links, pageName }) => {
  return (
    <>
      <div className="breadcrumb-and-back">
        <Container
          style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}
        >
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
        </Container>
      </div>
    </>
  );
};

export default BreadCrumbBack;
