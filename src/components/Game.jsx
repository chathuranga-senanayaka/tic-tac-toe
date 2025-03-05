import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

export default Game;
