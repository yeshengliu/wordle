import React, { useContext } from "react";
import { AppContext } from "../App";

function Message(props) {
  const { message } = useContext(AppContext);

  return (
    <div className="message">
      <h2>{message}</h2>
    </div>
  );
}

export default Message;
