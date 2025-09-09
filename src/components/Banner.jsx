import "../assets/components/banner.scss"
import Container from "../components/Container";

const Banner = () => {
    return (
        <div className="banner">
        <Container customStyle={{marginTop: "16.5dvh"}}>
            <div className="banner-container">
                <div className="banner-text1">
                    <div className="title-text">Instrumentação Industrial</div>
                    <div className="subtitle-text">Tecnologia aliada a um pós-venda especializado</div>
                </div>
                <div className="banner-text2">
                    <div className="subtitle-text2">
                        Soluções para medição de líquidos, vapor e gases Transmissor de pressão e nível Instrumentos analíticos de processo Serviços de calibração em campo com medidor ultrassônico ou skid móvel.
                    </div>
                </div>
            </div>
        </Container>
        </div>
  );
};

export default Banner;