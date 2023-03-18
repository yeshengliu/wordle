import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome";
import NormalPage from "./pages/NormalPage";
import HardPage from "./pages/HardPage";
import GameRule from "./pages/GameRule";

export const AppContext = createContext();

function App() {
  /* Global state */
  const [message, setMessage] = useState(``);
  const [targetWord, setTargetWord] = useState(``);
  const [playerWon, setPlayerWon] = useState(false);

  return (
    <Router>
      <div className="App">
        <AppContext.Provider
          value={{
            message,
            setMessage,
            targetWord,
            setTargetWord,
            playerWon,
            setPlayerWon,
          }}
        >
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/game/normal" element={<NormalPage />} />
            <Route exact path="/game/hard" element={<HardPage />} />
            <Route exact path="/game/rule" element={<GameRule />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
