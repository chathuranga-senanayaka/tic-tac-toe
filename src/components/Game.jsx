import React from "react";
import Board from "./Board";

const Game = () => {
  return (
    <div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info"></div>
    </div>
  );
};

export default Game;
