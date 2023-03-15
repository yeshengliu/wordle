import React from "react";
import Letter from "./Letter";

function Board(props) {
  const { board, size, maxAttempts } = props;

  // create a board of size size x size containing
  // Letter components
  const rows = [];
  for (let i = 0; i < maxAttempts; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(
        <Letter key={i * size + j} row={i} col={j} board={board} />
      );
    }
    rows.push(<div className="board-row" key={i}>{row}</div>);
  }
  return <div className="board">{rows}</div>;
}

export default Board;