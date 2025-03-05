import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-300">
      <div className="flex gap-3">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex gap-3">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex gap-3">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
