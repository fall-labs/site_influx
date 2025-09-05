import { NavLink } from "react-router-dom";
import "../assets/views/product.scss";
import Container from "../components/Container";
import NavBar from "../components/NavBar";

const Product = () => {
  return (
    <div className="main-background bg-dark" style={{ height: "100vh" }}>
        <NavBar />
        <Container>
            <div className="product-page">
                <NavLink to="/products">← Voltar</NavLink>
                <div className="product-description-and-img">
                    <div className="product-description">
                        <p>
                            
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
        </Container>
    </div>
  );
};

export default Product;