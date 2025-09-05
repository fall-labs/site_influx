import "../assets/views/product.scss";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import BreadCrumbBack from "../components/BreadCrumbBack";
import { useSearchParams } from 'react-router-dom';
import dataJson from "../assets/data.json"
import parse from "html-react-parser";
import ProductCard from "../components/ProductCard";

const Product = () => {
    const productsData = dataJson.products
    const [searchParams] = useSearchParams();
    const produto = searchParams.get('product');
    let data = productsData.filter(p => (p.name === produto))[0]
    let otherProducts = productsData.filter(p => (p.category === data.category && p.name != data.name))

    return (
    <div className="main-background bg-dark" style={{ height: "100vh" }}>
        <NavBar />
        <BreadCrumbBack />
        <Container>
            <div className="title">{data.name}</div>
            <div className="product-page">
                
                <div className="product-description-and-img">
                    <div className="product-description">
                        <p>
                        {parse(data.description)}
                        </p>
                    </div>
                    <div className="product-img">
                        <img src="../src/assets/images/foto.png" className="main-image"/>
                        <div className="other-images">
                            <img src="../src/assets/images/foto.png" className="secundary-images"/>
                            <img src="../src/assets/images/foto.png" className="secundary-images"/>
                            <img src="../src/assets/images/foto.png" className="secundary-images"/>
                            <img src="../src/assets/images/foto.png" className="secundary-images"/>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="title">Outros medidores de {data.category}</div>
            <div className="other-products">{otherProducts.map((obj)=>(<ProductCard title={obj.name} key={obj.name}/>))}</div>

        
    
        </Container>
    </div>
  );
};

export default Product;