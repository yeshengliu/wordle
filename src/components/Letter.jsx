import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Letter(props) {
  const { board } = useContext(AppContext);
  const currLetter = board[props.row][props.col];
  return <div className="letter">{currLetter}</div>;
}

export default Letter;
