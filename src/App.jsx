import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import WordInput from "./components/WordInput";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Message />
      <Board />
      <WordInput />
    </div>
  );
}

export default App;
