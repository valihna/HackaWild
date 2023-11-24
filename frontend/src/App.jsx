import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CalendrierContext from "../src/context/calendrierContext.jsx";

function App() {
  const [sageOuPas, setSageOuPas] = useState("");

  return (
    <div>
      <CalendrierContext.Provider
      value={{
        sageOuPas,
        setSageOuPas,
      }}>
        <Nav />
        <Outlet />
      </CalendrierContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
