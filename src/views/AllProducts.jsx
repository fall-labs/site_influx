import "../assets/views/home.scss";
import "../assets/views/allProducts.scss";

import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import * as siteData from "../assets/data.json";
import ProductCard from "../components/ProductCard";
import BreadCrumbBack from "../components/BreadCrumbBack";
import getAllData from "../components/ListDataFunction";

const handleChange = (event) => {
  console.log(event);
  setSelectedValue(event.target.value);
};

function AllProducts() {
  let productObj = getAllData();
  console.log(productObj);
  return (
    <>
      <div className="main-background bg-dark">
        <NavBar />
        <Container flexDirection="column">
          <BreadCrumbBack />
          <select onChange={handleChange} className="filter">
            <option value="option">Todos</option>
            {Object.keys(productObj).map((productKey) => (
              <option value={productKey}>{productKey}</option>
            ))}
          </select>
          <div className="product-list-by-type">
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
          </div>
        </Container>
        <div className="separator"></div>
        <Footer contactInfo={siteData.contact} aboutInfo={siteData.about} />
      </div>
    </>
  );
}

export default AllProducts;
