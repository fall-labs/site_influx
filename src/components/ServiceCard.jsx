import "../assets/components/card.scss"

const Card = ({ index, title, infoText }) => {
    return(
    <div key={"card-" + index} className="card">
        <div className="rectangle-blue">
            <strong className='title'>{title}</strong>
            <div>
                <span>{infoText}</span>
            </div>
        </div>
    </div>
    );
}

export default Card;