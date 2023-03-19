import React from "react";
import Main from "../components/Main";

function HardPage() {
  return (
    <div>
      <h1>Hard Level</h1>
      <Main size={7} maxAttempts={5} />
    </div>
  );
}

export default HardPage;