import "../assets/components/workflow.scss"
import img_path from "../assets/images/foto.png"
import image_especificacao from "../assets/images/workflow_especificacao.png"
import image_integracao from "../assets/images/workflow_integracao.png"
import image_pos_venda from "../assets/images/workflow_pos_venda.png"
import image_workflow_background from "../assets/images/workflow-background.svg"
import mini_influx_logo from "../assets/images/mini-influx-logo.svg"

const TrasparentCard = ({imagem_url, title, text}) => {
    const workflow_images = 
    {
        "Especificação":image_especificacao,
        "Integração":image_integracao,
        "Pós-venda":image_pos_venda
    }

    return(
            <div className="image-card">
                <div className="workflow-img" style={{backgroundImage:`url(${imagem_url})`}}></div>
                <div className="workflow-title">{title}</div>
                <div className="workflow-text">{text}</div>    
            </div>  
    );
}

export default TrasparentCard;