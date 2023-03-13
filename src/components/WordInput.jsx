import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useState } from "react";

function WordInput() {
  const { board, setBoard, currAttempt, setCurrAttempt, setMessage } =
    useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value.toUpperCase());
  }

  function handleClick() {
    // if input is longer or shorter than 6 letters, do nothing
    if (inputValue.length !== 6) {
      setMessage("Invalid input. Please enter a 6-letter word.");
      return;
    }

    // if input is 6-letter, add it to the board, row based on current attempt, then update currAttempt
    const newBoard = [...board];
    for (let i = 0; i < 6; i++) {
      newBoard[currAttempt][i] = inputValue[i];
    }
    setBoard(newBoard);
    setCurrAttempt(currAttempt + 1);
    setInputValue("");

    // if currAttemp is less than 6, show remaining attempt. if currAttemp is 6, game over
    if (currAttempt < 5) {
      setMessage(`${5 - currAttempt} attempts remaining.`);
    } else {
      setMessage("You lose!");
      return;
    }
  }
  return (
    <div className="worldInput">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Guess</button>
    </div>
  );
}

export default WordInput;
