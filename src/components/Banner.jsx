import "../assets/components/banner.scss";
import Container from "../components/Container";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner-container">
          <div className="banner-text1">
            <div className="title-text">Instrumentação Industrial</div>
            <div className="subtitle-text">
              Tecnologia aliada a um pós-venda especializado
            </div>
          </div>
          <div className="line-green"></div>
          <div className="banner-text2">
            <div className="subtitle-text2">
              Soluções para medição de líquidos, vapor e gases
              <br />
              Transmissor de pressão e nível
              <br />
              Instrumentos analíticos de processo
              <br />
              Serviços de calibração em campo com medidor ultrassônico ou skid
              móvel.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
