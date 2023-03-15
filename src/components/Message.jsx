import React, { useContext } from "react";
import { AppContext } from "../App";

function Message(props) {

  const { message } = useContext(AppContext);

  return <div className="message">{message}</div>;
}

export default Message;
