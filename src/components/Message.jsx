import React from "react";
import { AppContext } from "../App";

function Message() {
  const { message } = React.useContext(AppContext);
  return message ? <div className="message">{message}</div> : null;
}

export default Message;
