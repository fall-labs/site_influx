import "../assets/components/breadcrumbback.scss";

import { NavLink } from "react-router-dom";

import Container from "./Container";

const BreadCrumbBack = () => {
  return (
    <>
      <div className="breadcrumb-and-back">
        <div className="breadcrumb-container">
          <div className="breadcrumb">
            <NavLink to="/home" className="breadcrumb">
              Home
            </NavLink>
          </div>
          <p className="neutral">/ Catálogo de Produtos</p>
        </div>
        <div className="back">
          <NavLink to="/products">← Voltar</NavLink>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbBack;
