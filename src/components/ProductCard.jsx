import "../assets/components/product.scss"

const ProductCard = ({ key, title }) => {
    return(
    <div className="product-card-container" key={key}>
        <div className="product-text">{title}</div>
    </div>
    );
}

export default ProductCard;