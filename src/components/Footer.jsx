import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.svg";
import classNames from "classnames";
import "../assets/components/footer.scss";
import parse from "html-react-parser";
import wppIconPath from "../assets/images/whatsapp-icon.svg";
import emailIconPath from "../assets/images/email-icon.svg";
import addressIconPath from "../assets/images/address-icon.svg";
import Container from "./Container";

const Footer = ({ contactInfo, aboutInfo }) => {
  return (
    <div id="footer" aria-label="Footer">
      <Container>
        <div className="contact">
          <h3>Contato</h3>
          <div className="list">
            <div>
              <img src={wppIconPath} className="icon" />
              <span>{parse(contactInfo.whatsapp)}</span>
            </div>
            <div>
              <img src={emailIconPath} className="icon" />
              <span>{parse(contactInfo.email)}</span>
            </div>
            <div>
              <img src={addressIconPath} className="icon" />
              <span>{parse(contactInfo.address)}</span>
            </div>
          </div>
        </div>
        <div className="about">
          <h3>Sobre a Influx</h3>
          <p className="intro">{aboutInfo.intro}</p>
          <br />
          <p>{parse(aboutInfo.text)}</p>
        </div>
      </Container>
      <div className="rights">
        <p>© 2025 INFLUX Medição industrial. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
