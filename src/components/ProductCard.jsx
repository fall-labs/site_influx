import "../assets/components/product.scss"
import { NavLink } from "react-router-dom";

const ProductCard = ({ key, title }) => {
    return(
    <NavLink to={`/produto/teste`}>
    <div className="product-card-container" key={key}>
        <div className="product-text">{title}</div>
    </div>
    </NavLink>
    );
}

export default ProductCard;