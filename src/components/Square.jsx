import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };

  return (
    <button
      className="square border-2 border-gray-500 font-bold text-4xl w-24 h-24 flex items-center justify-center 
      rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Square;
