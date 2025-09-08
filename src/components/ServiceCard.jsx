import "../assets/components/servicecard.scss";

const ServiceCard = ({key, title, description}) => {
    return (
            <div className="service-card-container" key={key}>
                <div className="service-card-image"></div>
                <div className="service-card-title">{title}</div>
                <div className="service-card-description">{description}</div>
            </div>
  );
};

export default ServiceCard;