import "./App.css";
import Message from "./components/Message";
import WordInput from "./components/WordInput";
import BoardNormal from "./components/BoardNormal";
import { createContext, useState } from "react";
import { boardNormalDefault } from "./components/BoardNormal";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardNormalDefault);

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard }}>
        <Message />
        <BoardNormal />
        <WordInput />
      </AppContext.Provider>
    </div>
  );
}

export default App;
