import "../assets/components/service.scss"

const ServiceCard = ({ index, title, infoText }) => {
    return(
    <div className="service">
        <div className="service-container">
            <div className="service-card-container">
                <div className="service-text">Medidor de vazão tipo Vortex - INQV</div>
            </div>
        </div>
    </div>
    );
}

export default ServiceCard;