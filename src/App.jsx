import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import WordInput from "./components/WordInput";
import BoardNormal from "./components/BoardNormal";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [Board, setBoard] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);
  return (
    <div className="App">
      <Message />
      <BoardNormal />
      <WordInput />
    </div>
  );
}

export default App;
