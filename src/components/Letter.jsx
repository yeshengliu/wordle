import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Letter(props) {
  const { board, row, col } = props;
  const currLetter = board[row][col].letter;
  const currState = board[row][col].state;

  return (
    <div className="letter" id={currState}>
      {currLetter}
    </div>
  );
}

export default Letter;
