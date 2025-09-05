import "../assets/views/home.scss";
import "../assets/views/allProducts.scss"

import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import * as siteData from "../assets/data.json";
import ProductCard from "../components/ProductCard";
import dataJson from "../assets/data.json"
import BreadCrumbBack from "../components/BreadCrumbBack";
import getAllData from "../components/ListDataFunction";

function AllProducts() {
    let productObj = getAllData();
    return (
    <>
      <div className="main-background bg-dark" style={{ height: "100vh" }}>
        <NavBar />
        <Container flexDirection="column">
        <BreadCrumbBack />
        <div className="product-list-by-type">
            {Object.keys(productObj).map((productKey,index)=>
            (
            <>
            <div className="product-type" key={"product-type" + index}>
                <div className="product-type-color">{productKey}</div>
            </div>
            <div className={"category-list-" + productKey}>
            {productObj[productKey].map((obj)=>
            (
              <ProductCard title={obj.name} key={obj.name}/>
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
