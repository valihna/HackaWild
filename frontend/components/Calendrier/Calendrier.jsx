import { useState } from "react";
import data from "../../src/data";
import CardCalendrier from "../CardCalendrier/CardCalendrier";
import "./calendrier.css";

function Calendrier() {
  const [dataCadeau, setDataCadeau] = useState(0);

  function cadeau(event) {
    setDataCadeau(event.target.value);
  }

  function fermer() {
    setDataCadeau(0);
  }

  return (
    <div className="calender-all-container">
      <div className="calender-container">
        <div className="first-row">
          <button type="button" className="case" value="1" onClick={cadeau}>
            1
          </button>
          <button type="button" className="case" value="2" onClick={cadeau}>
            2
          </button>
          <button type="button" className="case" value="3" onClick={cadeau}>
            3
          </button>
          <button type="button" className="case" value="4" onClick={cadeau}>
            4
          </button>
          <button type="button" className="case" value="5" onClick={cadeau}>
            5
          </button>
        </div>

        <div className="second-row">
          <button type="button" className="case" value="6" onClick={cadeau}>
            6
          </button>
          <button type="button" className="case" value="7" onClick={cadeau}>
            7
          </button>
          <button type="button" className="case" value="8" onClick={cadeau}>
            8
          </button>
          <button type="button" className="case" value="9" onClick={cadeau}>
            9
          </button>
          <button type="button" className="case" value="10" onClick={cadeau}>
            10
          </button>
        </div>

        <div className="third-row">
          <button type="button" className="case" value="11" onClick={cadeau}>
            11
          </button>
          <button type="button" className="case" value="12" onClick={cadeau}>
            12
          </button>
          <button type="button" className="case" value="13" onClick={cadeau}>
            13
          </button>
          <button type="button" className="case" value="14" onClick={cadeau}>
            14
          </button>
          <button type="button" className="case" value="15" onClick={cadeau}>
            15
          </button>
        </div>

        <div className="fourth-row">
          <button type="button" className="case" value="16" onClick={cadeau}>
            16
          </button>
          <button type="button" className="case" value="17" onClick={cadeau}>
            17
          </button>
          <button type="button" className="case" value="18" onClick={cadeau}>
            18
          </button>
          <button type="button" className="case" value="19" onClick={cadeau}>
            19
          </button>
          <button type="button" className="case" value="20" onClick={cadeau}>
            20
          </button>
        </div>

        <div className="fivth-row">
          <button type="button" className="case" value="21" onClick={cadeau}>
            21
          </button>
          <button type="button" className="case" value="22" onClick={cadeau}>
            22
          </button>
          <button type="button" className="case" value="23" onClick={cadeau}>
            23
          </button>
          <button type="button" className="case" value="24" onClick={cadeau}>
            24
          </button>
          <button type="button" className="case" value="25" onClick={cadeau}>
            25
          </button>
        </div>
      </div>

      <div>
        {data
          .filter((cadeau) => cadeau.id === +dataCadeau)
          .map((cadeau) => (
            <CardCalendrier
              key={cadeau.id}
              title={cadeau.title}
              urlImg={cadeau.urlImg}
              fermer={fermer}
            />
          ))}
      </div>
    </div>
  );
}

export default Calendrier;
