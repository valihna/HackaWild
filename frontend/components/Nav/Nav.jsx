import { Link } from "react-router-dom";
import { useContext } from "react";
import CalendrierContext from "../../src/context/calendrierContext";
import "./Nav.css";


function Nav() {
  const {sageOuPas} = useContext(CalendrierContext);

  return (
    <nav>
      <ul>
        {sageOuPas === "oui" && <Link to="/calendrier" >
          <li>Calendrier</li>
        </Link>}
        <Link to="/">
          <li>Messagerie du Père Noël</li>
        </Link>
        {sageOuPas === "non" && <Link to="/morpion">
          <li>Jeu</li>
        </Link>}
      </ul>
    </nav>
  );
}

export default Nav;
