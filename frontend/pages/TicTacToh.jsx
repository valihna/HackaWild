// import Consignes from "./Consignes";
import { useState } from "react";
import PropTypes from "prop-types";

// import "./TicTacToh.css";

const TicTacToh = () => (
  <div className="game">
    <div className="game-consignes">
      <Consignes />
    </div>
  </div>
);

const calculateWinner = (carres) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (carres[a] && carres[a] === carres[b] && carres[a] === carres[c]) {
      return carres[a];
    }
  }

  return null;
};

const Carre = ({ value, onClick }) => (
  <button className="carre" onClick={onClick}>
    {value}
  </button>
);

Carre.propTypes = {
  value: PropTypes.string.isRequired,

  onClick: PropTypes.func.isRequired,
};

const Consignes = () => {
  const [carres, setCarres] = useState(Array(9).fill(null));
  const [xSuivant, setXSuivant] = useState(true);

  const handleClick = (i) => {
    const newCarres = carres.slice();
    if (calculateWinner(newCarres) || newCarres[i]) {
      return;
    }

    newCarres[i] = xSuivant ? "X" : "O";
    setCarres(newCarres);
    setXSuivant(!xSuivant);
  };

  const leCarre = (i) => (
    <Carre value={carres[i]} onClick={() => handleClick(i)} />
  );

  const winner = calculateWinner(carres);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xSuivant ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="ligne-verticale">
        {leCarre(0)}
        {leCarre(1)}
        {leCarre(2)}
      </div>
      <div className="ligne-verticale">
        {leCarre(3)}
        {leCarre(4)}
        {leCarre(5)}
      </div>
      <div className="ligne-verticale">
        {leCarre(6)}
        {leCarre(7)}
        {leCarre(8)}
      </div>
    </div>
  );
};

export default TicTacToh;
