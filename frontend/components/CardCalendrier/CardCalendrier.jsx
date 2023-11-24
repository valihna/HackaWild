/* eslint-disable react/prop-types */
import "./CardCalendrier.css";

function CardCalendrier({ urlImg, title, fermer }) {
  return (
    <div className="cadeau-container">
      <div className="cadeau">
        <div className="header-container">
          <h1>{title}</h1>
          <span className="croos-form" onClick={fermer}>
            X
          </span>
        </div>
        <img src={urlImg} alt={title} />
      </div>
    </div>
  );
}

export default CardCalendrier;
