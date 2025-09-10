import "../assets/components/homeproducts.scss";
import "../assets/views/allProducts.scss";

import { NavLink } from "react-router-dom";
import Container from "./Container";
import section_icon_ball from "../assets/images/section-icon-ball.svg";
import dataJson from "../assets/data.json";
import ProductCard from "../components/ProductCard";
import InclinedSeparator from "../components/InclinedSeparator";
import { useState } from "react";

const HomeProducts = () => {
  const productsObj = dataJson.products;
  const productsInitObj = dataJson.products.slice(0, 6);
  const [showProductFullList, setShowProductFullList] = useState(false);
  return (
    <div className="home-products">
      <Container>
        <div className="title-and-redirect">
          <div className="home-product-title">
            <img src={section_icon_ball} />
            Produtos
          </div>
          <NavLink to={{ pathname: "/products" }} className={"redirect"}>
            {" "}
            Catálogo de Produtos
          </NavLink>
        </div>
      </Container>

      <div className="list-content">
        <InclinedSeparator bgcolorbefore="#fff" bgcolorafter="#606062" />
        <Container>
          <div className="home-product-list">
            {showProductFullList
              ? productsObj.map((obj) => (
                  <ProductCard title={obj.name} key={obj.index} />
                ))
              : productsInitObj.map((obj) => (
                  <ProductCard title={obj.name} key={obj.index} />
                ))}
          </div>
          <button
            className="show-products-btn"
            onClick={() => setShowProductFullList((current) => !current)}
          >
            {showProductFullList
              ? "Esconder produtos"
              : "Mostrar todos os produtos"}
          </button>
        </Container>
        <InclinedSeparator bgcolorbefore="#606062" />
      </div>
    </div>
  );
};

export default HomeProducts;
