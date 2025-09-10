import "../assets/components/servicecard.scss";

const ServiceCard = ({index, title, description}) => {
    return (
            <div className="service-card-container" key={index}>
                <div className="service-card-image"></div>
                <div className="service-card-title">{title}</div>
                <div className="service-card-description">{description}</div>
            </div>
  );
};

export default ServiceCard;