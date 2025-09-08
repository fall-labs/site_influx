import "../assets/components/breadcrumbback.scss";

import { NavLink } from "react-router-dom";

import Container from "./Container";

const BreadCrumbBack = () => {
  return (
    <>
      <div className="breadcrumb-and-back">
        <Container>
        <div className="breadcrumb-container">
          <div className="breadcrumb"><NavLink to="/home" className="breadcrumb">Home</NavLink></div>
          <p className="neutral">/</p>
          <div className="breadcrumb"><NavLink to="/products" className="breadcrumb">Catálogo de Produtos</NavLink></div>
        </div>
        <div className="back"><NavLink to="/products">← Voltar</NavLink></div>
        </Container>
      </div>
      
    </>
  );
};

export default BreadCrumbBack;