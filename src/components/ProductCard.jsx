import "../assets/components/product.scss"

const ProductCard = ({ index, title, infoText }) => {
    return(
    <div className="product">
        <div className="product-container">
            <div className="product-card-container">
                <div className="product-text">Medidor de vazão tipo Vortex - INQV</div>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;