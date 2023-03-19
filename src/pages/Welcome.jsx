import React from "react";
import Button from "react-bootstrap/Button";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to the Wordle Game!</h1>
      <div>
        <Button href="/game/normal" variant="primary">
          Normal
        </Button>
        <Button href="/game/hard" variant="danger">
          Hard
        </Button>
        <Button href="/game/rule" variant="secondary">
          Rules
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
