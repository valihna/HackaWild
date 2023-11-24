import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
