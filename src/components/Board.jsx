import Square from "./Square";
import { calculateWinner } from "../helper/calculateWinner.js";

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
      <div className="status text-xl font-semibold text-gray-700 mb-4 text-center">
        {status}
      </div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="board-row flex gap-3">
          {[0, 1, 2].map((col) => (
            <Square
              key={row + col}
              value={squares[row + col]}
              onSquareClick={() => handleClick(row + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
