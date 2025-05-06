import React, { useState } from 'react';
import Board from './components/Board';
import { GameState, Player } from './types';
import './App.css';

const initialGameState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  xWins: 0,
  oWins: 0,
};

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const checkWinner = (board: Player[]): Player => {
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (gameState.board[index] || gameState.winner) return;

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;

    const winner = checkWinner(newBoard);
    const newGameState: GameState = {
      ...gameState,
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner,
      xWins: winner === 'X' ? gameState.xWins + 1 : gameState.xWins,
      oWins: winner === 'O' ? gameState.oWins + 1 : gameState.oWins,
    };

    setGameState(newGameState);
  };

  const handlePlayAgain = () => {
    setGameState({
      ...gameState,
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board
        gameState={gameState}
        onCellClick={handleCellClick}
        onPlayAgain={handlePlayAgain}
      />
    </div>
  );
}

export default App;
