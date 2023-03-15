import React from "react";

function Letter(props) {
  const { board, row, col } = props;
  const currLetter = board[row][col];
  return <div className="letter">{currLetter}</div>;
}

export default Letter;
