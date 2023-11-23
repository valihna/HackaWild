import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Calendrier</li>
        </Link>
        <Link to="/Contact">
          <li>Messagerie du Père Noël</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
