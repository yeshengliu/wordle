import React, { useState, useContext } from "react";
import Message from "./Message";
import Board from "./Board";
import WordInput from "./WordInput";
import { AppContext } from "../App";

function Main() {

  const { setMessage } = useContext(AppContext);

  const size = 6;
  const maxAttempts = 6;
  // Create a board of size x size containing empty strings
  const emptyBoard = [];
  for (let i = 0; i < maxAttempts; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push("");
    }
    emptyBoard.push(row);
  }
  const [board, setBoard] = useState(emptyBoard);
  const [currAttempt, setCurrAttempt] = useState(1);

  const reset = function() {
    setCurrAttempt(1);
    setMessage(`Please enter a ${size}-letter word. ${maxAttempts} attempts remaining.`);
    setBoard(emptyBoard);
  };

  React.useEffect(() => {
    reset();
  }, []);

  return (
    <div>
      <Message />
      <Board 
        board={board}
        size={size}
        maxAttempts={maxAttempts}
      />
      <WordInput
        board={board}
        setBoard={setBoard}
        size={size}
        currAttempt={currAttempt}
        setCurrAttempt={setCurrAttempt}
        maxAttempts={maxAttempts}
      />
    </div>
  );
}

export default Main;