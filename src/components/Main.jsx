import React, { useState, useContext } from "react";
import Message from "./Message";
import Board from "./Board";
import WordInput from "./WordInput";
import { sixLetterWords, sevenLetterWords } from "../resources/WordSet";
import { AppContext } from "../App";

function Main(props) {
  const { targetWord, setMessage, setTargetWord, setPlayerWon } = useContext(AppContext);
  const { size, maxAttempts } = props;

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

  const reset = function () {
    setCurrAttempt(1);
    setMessage(
      `Please enter a ${size}-letter word. ${maxAttempts} attempts remaining.`
    );
    setBoard(emptyBoard);
    setPlayerWon(false);
    // select a random word from the word set
    if (size === 6) {
      setTargetWord(sixLetterWords[Math.floor(Math.random() * sixLetterWords.length)]);
    } else if (size === 7) {
      setTargetWord(sevenLetterWords[Math.floor(Math.random() * sevenLetterWords.length)]);
    }
  };

  React.useEffect(() => {
    reset();
  }, []);

  return (
    <div>
      <nav>
        <h1>Wordle</h1>
        <h2>{targetWord}</h2>
      </nav>
      <Message />
      <Board board={board} size={size} maxAttempts={maxAttempts} />
      <WordInput
        board={board}
        setBoard={setBoard}
        size={size}
        currAttempt={currAttempt}
        setCurrAttempt={setCurrAttempt}
        maxAttempts={maxAttempts}
        handleReset={reset}
      />
    </div>
  );
}

export default Main;
