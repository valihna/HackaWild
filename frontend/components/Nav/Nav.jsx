import { Link } from "react-router-dom";

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
        <Link to="/Surprise">
          <li>Surprise</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
