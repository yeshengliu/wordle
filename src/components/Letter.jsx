import React from "react";

function Letter(props) {
  const { board, row, col } = props;
  const currLetter = board[row][col].letter;
  const currState = board[row][col].state;

  return (
    <div className={`letter ${currState}`}>
      {currLetter}
    </div>
  );
}

export default Letter;
