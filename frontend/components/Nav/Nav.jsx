import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
}

export default Nav;
