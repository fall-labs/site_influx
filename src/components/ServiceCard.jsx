import "../assets/components/card.scss"

const Card = ({ index, title, infoText }) => {
    return(
    <div key={"card-" + index} className="card">
        <div className="card-rectangle">
            <div className="card-img">imagem</div>
            <div>
                <div>
                    <strong className='card-title'>{title}</strong>
                </div>
                <div className="card-txt">
                    <span>{infoText}</span>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Card;