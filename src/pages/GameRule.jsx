import React from "react";

function GameRule() {
  return (
    <div className="game-rule">
      <h1>How To Play</h1>
      <h4>
        {" "}
        <strong>Guess the Wordle</strong>
      </h4>
      <div className="content">
        <p>
          <strong>Easy</strong> - 6-letter word - 6 attempts
        </p>
        <p>
          <strong>Hard</strong> - 7-letter word - 5 attempts
        </p>
      </div>

      <h4>
        {" "}
        <strong>Color Code</strong>
      </h4>
      <div className="content">
        <p>
          <strong>Green</strong> - Correct letter, correct spot
        </p>
        <p>
          {" "}
          <strong>Yellow</strong> - Correct letter, wrong spot
        </p>
        <p>
          {" "}
          <strong>Grey</strong> - Incorrect letter
        </p>
      </div>
    </div>
  );
}

export default GameRule;
