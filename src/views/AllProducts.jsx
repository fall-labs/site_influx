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

const handleChange = (event) => {
  console.log(event);
  setSelectedValue(event.target.value);
};

function AllProducts() {
  let productObj = getAllData();
  return (
    <>
      <div className="main-background">
        <NavBar />
        <div className="content-div">
          <Container flexDirection="column">
            <BreadCrumbBack />
            <div className="title-and-filter">
              <p className="title">Catálogo de Produtos</p>
              <div className="filter">
                <span>Tipo:</span>
                <select
                  onChange={handleChange}
                  className="minimal"
                  name="product-filter"
                >
                  <option value="option">Todos</option>
                  {Object.keys(productObj).map((productKey) => (
                    <option value={productKey}>{productKey}</option>
                  ))}
                </select>
              </div>
            </div>
          </Container>

          <div className="product-list-by-type">
            <InclinedSeparator bgColorBefore="#fff" bgColorAfter="#606062" />
            <Container>
              {Object.keys(productObj).map((productKey, index) => (
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
              ))}
            </Container>
            <InclinedSeparator bgColorBefore="#606062" />
          </div>
        </div>
        <Footer contactInfo={siteData.contact} aboutInfo={siteData.about} />
      </div>
    </>
  );
}

export default AllProducts;
