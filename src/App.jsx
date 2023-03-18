import "./App.css";
import { createContext, useState } from "react";
import Main from "./components/Main";

export const AppContext = createContext();

function App() {
  /* Global state */
  const [message, setMessage] = useState(``);
  const [targetWord, setTargetWord] = useState(``);
  const [playerWon, setPlayerWon] = useState(false);

  return (
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
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
