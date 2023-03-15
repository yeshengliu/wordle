import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function WordInput(props) {
  const { setMessage, targetWord } = useContext(AppContext);

  const { board, setBoard, size, currAttempt, setCurrAttempt, maxAttempts } = props;

  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value.toUpperCase());
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
      return;
    }
    
    // allow only letter inputs
    const charCode = (e.which) ? e.which : e.keyCode;
    if ((charCode < 65 || charCode > 90) && 
      (charCode < 97 || charCode > 122) && 
      (charCode != 32) && (e.key != "Backspace")) {
      e.preventDefault();
    }
  }

  function handleClick() {
    setInputValue("");
    // not respond if user exceeds max attempts
    if (currAttempt > maxAttempts) {
      return;
    }

    // if input length is longer or shorter than size, do nothing
    if (inputValue.length !== size) {
      setMessage(`Invalid input. Please enter a ${size}-letter word.`);
      return;
    }

    // if input is valid, add it to the board, row based on current attempt, then update currAttempt
    const newBoard = [...board];
    for (let i = 0; i < size; i++) {
      newBoard[currAttempt - 1][i] = inputValue[i];
    }
    setBoard(newBoard);
    
    
    if (inputValue === targetWord) {
      setMessage(`Congratulations! You won!`);
    } else if (currAttempt === maxAttempts) {
      setMessage(`Game Over! The word was "${targetWord}"`);
    } else {
      setMessage(`Please enter a ${size}-letter word. ${maxAttempts - currAttempt} attempts remaining.`);
    }
    setCurrAttempt(currAttempt + 1);
  }
  return (
    <div className="worldInput">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Guess</button>
    </div>
  );
}

export default WordInput;
