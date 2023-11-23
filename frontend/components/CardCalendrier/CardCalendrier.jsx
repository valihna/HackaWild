import "./CardCalendrier.css";

function CardCalendrier({urlImg, title, fermer}){
    return <div className="cadeau">
        <span onClick={fermer}>X</span>
        <div>
            <h1>{title}</h1>
        </div>
        <img src={urlImg} alt={title}/>
    </div>
}

export default CardCalendrier;