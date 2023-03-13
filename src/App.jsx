import "./App.css";
import Message from "./components/Message";
import WordInput from "./components/WordInput";
import BoardNormal from "./components/BoardNormal";
import { createContext, useState } from "react";
import { boardNormalDefault } from "./components/BoardNormal";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardNormalDefault);
  const [inputValue, setInputValue] = useState("");
  const [currAttempt, setCurrAttempt] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          inputValue,
          setInputValue,
          currAttempt,
          setCurrAttempt,
        }}
      >
        <Message />
        <BoardNormal />
        <WordInput />
      </AppContext.Provider>
    </div>
  );
}

export default App;
