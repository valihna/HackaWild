import { useState } from "react";
import data from "../../src/data";
import CardCalendrier from "../CardCalendrier/CardCalendrier";
import "./calendrier.css";

function Calendrier() {
  const [dataCadeau, setDataCadeau] = useState(0);

  function cadeau(event){
    setDataCadeau(event.target.value);
  }

  function fermer(){
    setDataCadeau(0);
  }

  return (
    <div className="calender-all-container">
      <div className="calender-container">
        <div className="first-row">
          <button type="button" className="case" value="1" onClick={cadeau} >
            1
          </button>
          <button type="button" className="case" value="2" onClick={cadeau}>
            2
          </button>
          <div className="case">
            <p className="numbers-calendrier">3</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">4</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">5</p>
          </div>
        </div>
        <div className="second-row">
          <div className="case">
            <p className="numbers-calendrier">6</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">7</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">8</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">9</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">10</p>
          </div>
        </div>
        <div className="third-row">
          <div className="case">
            <p className="numbers-calendrier">11</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">12</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">13</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">14</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">15</p>
          </div>
        </div>
        <div className="fourth-row">
          <div className="case">
            <p className="numbers-calendrier">16</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">17</p>
          </div> 
          <div className="case">
            <p className="numbers-calendrier">18</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">19</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">20</p>
          </div>
        </div>
        <div className="fivth-row">
          <div className="case">
            <p className="numbers-calendrier">21</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">22</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">23</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">24</p>
          </div>
          <div className="case">
            <p className="numbers-calendrier">25</p>
          </div>
        </div>
      </div>

        <div>
          {data.filter((cadeau) => cadeau.id === +dataCadeau)
          .map((cadeau) => ( 
            <CardCalendrier key={cadeau.id} title={cadeau.title} urlImg={cadeau.urlImg} fermer={fermer}/>
            )
            )
          }
        </div>
      </div>
  
  );
}

export default Calendrier;
