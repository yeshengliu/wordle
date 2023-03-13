import React from "react";
import Letter from "./Letter";

export const boardNormalDefault = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

function BoardNormal() {
  return (
    <div className="board">
      <div className="board-row">
        <Letter row={0} col={0} />
        <Letter row={0} col={1} />
        <Letter row={0} col={2} />
        <Letter row={0} col={3} />
        <Letter row={0} col={4} />
        <Letter row={0} col={5} />
      </div>
      <div className="board-row">
        <Letter row={1} col={0} />
        <Letter row={1} col={1} />
        <Letter row={1} col={2} />
        <Letter row={1} col={3} />
        <Letter row={1} col={4} />
        <Letter row={1} col={5} />
      </div>
      <div className="board-row">
        <Letter row={2} col={0} />
        <Letter row={2} col={1} />
        <Letter row={2} col={2} />
        <Letter row={2} col={3} />
        <Letter row={2} col={4} />
        <Letter row={2} col={5} />
      </div>
      <div className="board-row">
        <Letter row={3} col={0} />
        <Letter row={3} col={1} />
        <Letter row={3} col={2} />
        <Letter row={3} col={3} />
        <Letter row={3} col={4} />
        <Letter row={3} col={5} />
      </div>
      <div className="board-row">
        <Letter row={4} col={0} />
        <Letter row={4} col={1} />
        <Letter row={4} col={2} />
        <Letter row={4} col={3} />
        <Letter row={4} col={4} />
        <Letter row={4} col={5} />
      </div>
      <div className="board-row">
        <Letter row={5} col={0} />
        <Letter row={5} col={1} />
        <Letter row={5} col={2} />
        <Letter row={5} col={3} />
        <Letter row={5} col={4} />
        <Letter row={5} col={5} />
      </div>
    </div>
  );
}

export default BoardNormal;
