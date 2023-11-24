import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Morpion.css";

const calculateWinner = (carres) => {
  const lignes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lignes.length; i++) {
    const [a, b, c] = lignes[i];
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

  const jeuPereNoel = () => {
    if (!xSuivant) {
      // Math.random() MDN webDoc
      let mathRandom;
      do {
        mathRandom = Math.floor(Math.random() * 9);
      } while (carres[mathRandom] !== null);
      // MDN Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
      handleClick(mathRandom);
    }
  };

  useEffect(() => {
    jeuPereNoel();
  }, [carres, xSuivant]);
  // Voir doc MDN
  const leCarre = (i) => (
    <Carre value={carres[i]} onClick={() => handleClick(i)} />
  );

  const winner = calculateWinner(carres);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xSuivant ? "X" : "O"}`;
  // voir cours openClassroom (debut de jeu react)
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

export default Consignes;
