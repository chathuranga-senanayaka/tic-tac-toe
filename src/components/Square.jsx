import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="square border-2 border-gray-500 font-bold text-4xl w-24 h-24 flex items-center justify-center 
      rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
