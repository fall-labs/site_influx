import "../assets/views/home.scss";
import "../assets/views/allProducts.scss";

import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import * as siteData from "../assets/data.json";
import ProductCard from "../components/ProductCard";
import BreadCrumbBack from "../components/BreadCrumbBack";
import getAllData from "../components/ListDataFunction";
import InclinedSeparator from "../components/InclinedSeparator";
import { useState, useEffect } from "react";

function AllProducts() {
  let productObj = getAllData();
  const [filterValue, setFilterValue] = useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="main-background">
        <NavBar />
        <div className="content-div">
          <Container>
            <BreadCrumbBack
              links={[{ to: "/", label: "Home" }]}
              pageName="Catálogo de Produtos"
            />
            <div className="title-and-filter">
              <p className="title">Catálogo de Produtos</p>
              <div className="filter">
                <span>Tipo:</span>
                <select
                  onChange={(event) => setFilterValue(event.target.value)}
                  className="minimal"
                  name="product-filter"
                >
                  <option key="select-all" value="Todos">
                    Todos
                  </option>
                  {Object.keys(productObj).map((productKey) => (
                    <option key={`select-${productKey}`} value={productKey}>
                      {productKey}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Container>

          <div className="product-list-by-type">
            <InclinedSeparator bgcolorbefore="#fff" bgcolorafter="#606062" />
            <Container>
              {filterValue == "Todos" ? (
                Object.keys(productObj).map((productKey, index) => (
                  <>
                    <div className="product-type" key={"product-type" + index}>
                      <div className="product-type-color">{productKey}</div>
                    </div>
                    <div className={"category-list-" + productKey}>
                      {productObj[productKey].map((obj) => (
                        <ProductCard title={obj.name} key={obj.name} />
                      ))}
                    </div>
                  </>
                ))
              ) : (
                <>
                  <div className="product-type" key={"product-type-1"}>
                    <div className="product-type-color">{filterValue}</div>
                  </div>
                  <div className={"category-list-" + filterValue}>
                    {productObj[filterValue].map((obj) => (
                      <ProductCard title={obj.name} key={obj.name} />
                    ))}
                  </div>
                </>
              )}
            </Container>
            <InclinedSeparator bgcolorbefore="#606062" />
          </div>
        </div>
        <Footer contactInfo={siteData.contact} aboutInfo={siteData.about} />
      </div>
    </>
  );
}

export default AllProducts;
