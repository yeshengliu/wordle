import React from "react";
import Main from "../components/Main";

function NormalPage() {
  return (
    <div>
      <h1>Normal Level</h1>
      <Main size={6} maxAttempts={6} />
    </div>
  );
}

export default NormalPage;