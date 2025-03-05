export function calculateWinner(squares) {
  // Define all possible winning line combinations in a 3x3 tic-tac-toe board
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  // Loop through each possible winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Get the three positions that form a winning line

    // Check if all three squares contain the same non-null value (either 'X' or 'O')
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }

  return null; // Return null if no winner is found
}
