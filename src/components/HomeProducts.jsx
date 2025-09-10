import "../assets/components/homeproducts.scss"
import "../assets/views/allProducts.scss";

import { NavLink } from "react-router-dom";
import Container from "./Container";
import section_icon_ball from "../assets/images/section-icon-ball.svg"
import dataJson from "../assets/data.json"
import ProductCard from "../components/ProductCard";

const HomeProducts = () => {
    let productObj = dataJson.products;
    let productLimited = 3
    return(
            <div className="home-products">
                
                <Container>
                    <div className="title-and-redirect">
                        
                        <div className="home-product-title">
                            <img src={section_icon_ball}/>
                            Produtos
                        </div>
                        <NavLink to={{pathname: "/products"}} className={"redirect"}> Catálogo de Produtos</NavLink>
                    </div>
                    <div className="home-product-list">
                    {productObj.map((obj)=>(
                        <ProductCard title={obj.name} key={obj.index} />
                    ))}
                    </div>
                </Container>
            </div>
    );
}

export default HomeProducts;