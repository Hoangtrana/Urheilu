import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Urheilijatiedot from "./components/Urheilijatiedot";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaPuhelintieto from "./components/MuokkaaUrheilija";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste turvataso="keskisuuri" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijatiedot />} />
              <Route
                path="/urheilijatieto/lisaa"
                element={<LisaaUrheilija />}
              />
              <Route
                path="/urheilijatieto/muokkaa/:id"
                element={<MuokkaaPuhelintieto />}
              />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
