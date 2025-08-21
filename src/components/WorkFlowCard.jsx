import "../assets/components/workflow.scss"
import img_path from "../assets/images/foto.png"
import image_especificacao from "../assets/images/workflow_especificacao.png"
import image_integracao from "../assets/images/workflow_integracao.png"
import image_pos_venda from "../assets/images/workflow_pos_venda.png"
import image_workflow_background from "../assets/images/workflow-background.svg"
import mini_influx_logo from "../assets/images/mini-influx-logo.svg"
import TrasparentCard from "./TransparentCard"

const WorkFlow = ({data}) => {
    const workflow_images = 
    {
        "Especificação":image_especificacao,
        "Integração":image_integracao,
        "Pós-venda":image_pos_venda
    }

    return(
    <div className="workflow">
        <img className="workflow-background" src={image_workflow_background}></img>
        <div className="workflow-container">
            <div className="workflow-header">
                <img src={mini_influx_logo}></img>
                <p class="">WorkFlow</p>
            </div>
            <div className="card-container">
            {data.map((item, index) => (
                <TrasparentCard imagem_url={workflow_images[item.title]} title={item.title} text={item.text}/>
            ))}
            </div>
        </div>
    </div>
    );
}

export default WorkFlow;