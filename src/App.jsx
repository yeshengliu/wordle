import "./App.css";
import { createContext, useState } from "react";
import Main from "./components/Main";

export const AppContext = createContext();

function App() {
  /* Global state */
  const [message, setMessage] = useState(``);
  const targetWord = "RIGHTR";

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          message,
          setMessage,
          targetWord,
        }}
      >
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
