import Container from "../components/Container";
import dataJson from "../assets/data.json"
import ServiceCard from "./ServiceCard";
import "../assets/components/service.scss";
import parse from "html-react-parser";
import section_icon_wave from "../assets/images/section-icon-wave.svg"

const Services = () => {
    let servicesObj = dataJson.services
    return (
      <div className="service">
      <div className="waves">
          <img src={section_icon_wave} className="giant-wave"></img>
          <img src={section_icon_wave} className="giant-wave"></img>
      </div>
      <Container>
          <div className="service-title">
            <img src={section_icon_wave}></img>
            <p>Serviços</p>
          </div>
          <div className="service-list">
  
          {servicesObj.map((obj,index)=>(
            <ServiceCard key={index} title={obj.title} description={parse(obj.description)}/>
          ))}
          </div>
          
      </Container>
    </div>
  );
};

export default Services;