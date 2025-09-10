import "../assets/views/home.scss";

import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import * as siteData from "../assets/data.json";
import WorkFlow from "../components/WorkFlowCard";
import Services from "../components/Services";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <div className="main-background bg-dark">
        <NavBar />
        <Banner />
        <Services />
        <WorkFlow data={siteData.workflow} />
        <div className="separator"></div>
        <Footer contactInfo={siteData.contact} aboutInfo={siteData.about} />
      </div>
    </>
  );
}

export default Home;
