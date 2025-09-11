import "../assets/views/product.scss";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import BreadCrumbBack from "../components/BreadCrumbBack";
import { useSearchParams } from "react-router-dom";
import dataJson from "../assets/data.json";
import parse from "html-react-parser";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import InclinedSeparator from "../components/InclinedSeparator";
import { useEffect } from "react";

const Product = () => {
  const productsData = dataJson.products;
  const [searchParams] = useSearchParams();
  const produto = searchParams.get("product");
  let data = productsData.filter((p) => p.name === produto)[0];
  let otherProducts = productsData.filter(
    (p) => p.category === data.category && p.name != data.name
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-background">
      <NavBar />
      <div className="main-product-page">
        <BreadCrumbBack
          links={[
            { to: "/", label: "Home" },
            { to: "/products", label: "Produtos" },
          ]}
          pageName={data.category}
        />
        <div className="product-page">
          <div className="bg-title">
            <Container>
              <div className="title">{data.name}</div>
            </Container>
          </div>
          <InclinedSeparator bgcolorbefore="#fff" bgcolorafter="#606062" />
          <Container>
            <div className="product-description-and-img">
              <div className="product-description">
                <p>{parse(data.description)}</p>
              </div>
              <div className="product-img">
                <img src="../src/assets/images/foto.png" className="main-image" />
                <div className="other-images">
                  <img
                    src="../src/assets/images/foto.png"
                    className="secundary-images"
                  />
                  <img
                    src="../src/assets/images/foto.png"
                    className="secundary-images"
                  />
                  <img
                    src="../src/assets/images/foto.png"
                    className="secundary-images"
                  />
                  <img
                    src="../src/assets/images/foto.png"
                    className="secundary-images"
                  />
                </div>
              </div>
            </div>
          </Container>
          <InclinedSeparator bgcolorbefore="#606062" bgcolorafter="#fff" />
        </div>

        <div className="other-products">
          <Container >
            <div className="title">Outros medidores de {data.category}</div>
            <div className="list-other-products">
              {otherProducts.map((obj) => (
                <ProductCard title={obj.name} key={obj.name} />
              ))}
            </div>
          </Container>
        </div>
        <Footer contactInfo={dataJson.contact} aboutInfo={dataJson.about} hideContent={true} />
      </div>
    </div>
  );
};

export default Product;
