import "../assets/views/home.scss";
import "../assets/views/allProducts.scss"

import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import * as siteData from "../assets/data.json";
import ProductCard from "../components/ProductCard";
import dataJson from "../assets/data.json"


function AllProducts() {
    const productsData = dataJson.products
    let productObj = {}
    for (let i of productsData){
        if (!productObj[i.category]){
            productObj[i.category] = []
        }
        productObj[i.category].push(i)
    }

    return (
    <>
      <div className="main-background bg-dark" style={{ height: "100vh" }}>
        <NavBar />
        <Container flexDirection="column">
        <div className="breadcrumb-and-back">
            <div className="breadcrumb">Home/Catálogo de Produtos</div>
            <div className="back">Voltar</div>
        </div>
        <div className="title-and-filter">
            <div className="title">Catálogo de Produtos</div>
            <div className="filter">Tipo</div>
        </div>

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
