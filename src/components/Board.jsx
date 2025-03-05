import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../helper/calculateWinner.js";

const Board = () => {
  //change turns
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); //[null, null, null, null, null, null, null, null, null]

  const handleClick = (i) => {
    //if square is already filled, return early
    //or check already has a winner
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //get a copy of the squares array
    const nextSquares = squares.slice();

    //check turn
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  };

  //check winner
  const winner = calculateWinner(squares);
  let status;
  //tell winner if winner already exists or tell next player
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
      <div className="status text-xl font-semibold text-gray-700 mb-4 text-center">
        {status}
      </div>
      <div className="board-row flex gap-3">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row flex gap-3">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row flex gap-3">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
