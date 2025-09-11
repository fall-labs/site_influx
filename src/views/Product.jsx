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
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Product = () => {
  const productsData = dataJson.products;
  const [searchParams] = useSearchParams();
  const produto = searchParams.get("product");
  let data = productsData.filter((p) => p.name === produto)[0];
  let otherProducts = productsData.filter(
    (p) => p.category === data.category && p.name != data.name
  );
  console.log(data);
  const imageList = data.path_images.image_list.map((item) => ({
    // original: `../src/assets/images/${data.path_images.folder}/${item}`,
    // thumbnail: `../src/assets/images/${data.path_images.folder}/${item}`
    original: `../src/assets/images/foto.png`,
    thumbnail: `../src/assets/images/foto.png`,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-background">
      <NavBar />
      <div className="main-product-page">
        <div className="product-page">
          <BreadCrumbBack
            links={[
              { to: "/", label: "Home" },
              { to: "/products", label: "Produtos" },
            ]}
            pageName={data.category}
          />
          <div className="bg-title">
            <Container>
              <div className="title">{data.name}</div>
            </Container>
          </div>
          <InclinedSeparator bgcolorbefore="#fff" bgcolorafter="#606062" />
          <Container>
            <div className="title">{data.name}</div>
            <div className="product-description-and-img">
              <div className="product-description">
                <p>{parse(data.description)}</p>
              </div>
              <ImageGallery
                items={imageList}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={5000}
              />
            </div>
          </Container>
          <InclinedSeparator bgcolorbefore="#606062" bgcolorafter="#fff" />
        </div>

        <div className="other-products">
          <Container>
            <div className="title">Outros medidores de {data.category}</div>
            <div className="list-other-products">
              {otherProducts.map((obj) => (
                <ProductCard title={obj.name} key={obj.name} />
              ))}
            </div>
          </Container>
        </div>
        <Footer
          contactInfo={dataJson.contact}
          aboutInfo={dataJson.about}
          hideContent={true}
        />
      </div>
    </div>
  );
};

export default Product;
