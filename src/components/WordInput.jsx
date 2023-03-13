import React from "react";
import { AppContext } from "../App";

function WordInput() {
  const {
    board,
    setBoard,
    inputValue,
    setInputValue,
    currAttempt,
    setCurrAttempt,
  } = React.useContext(AppContext);

  function handleChange(e) {
    setInputValue(e.target.value.toUpperCase());
  }

  function handleClick() {
    updateBoard(inputValue);

    function updateBoard() {
      const newBoard = [...board];
      for (let i = 0; i < 6; i++) {
        newBoard[currAttempt][i] = inputValue[i];
      }
      setBoard(newBoard);
      setCurrAttempt(currAttempt + 1);
      setInputValue("");
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
