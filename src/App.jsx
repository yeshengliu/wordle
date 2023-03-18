import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NormalPage from "./pages/NormalPage";
import HardPage from "./pages/HardPage";

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
          <Routes>
            <Route exact path="/game/normal" element={<NormalPage />} />
            <Route exact path="/game/hard" element={<HardPage />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
