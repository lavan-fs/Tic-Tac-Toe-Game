# Tic Tac Toe Game

A modern, responsive Tic Tac Toe game built with React and TypeScript, featuring a sleek dark theme with neon effects and animated winning celebrations.

## Features

- 🎮 Classic Tic Tac Toe gameplay
- 🌟 Animated winning celebrations with floating stars
- 📊 Score tracking for both players
- 🎨 Modern dark theme with neon effects
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔄 Play again functionality
- 🎯 Win detection and game state management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lavan-fs/Tic-Tac-Toe-Game.git

cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The game will open in your default browser at `http://localhost:3000`

## How to Play

1. The game starts with Player X
2. Players take turns clicking on empty cells to place their mark (X or O)
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled and no player has won, the game is a draw
5. Click "Play Again" to start a new game
6. The score is tracked at the top of the game board

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── components/
│   │   ├── Board.tsx
│   │   ├── Board.css
│   │   ├── WinningModal.tsx
│   │   └── WinningModal.css
│   ├── App.tsx
│   ├── App.css
│   └── types.ts
├── public/
├── package.json
└── README.md
```

## Technologies Used

- React.js
- TypeScript
- CSS3 (with animations)
- HTML5

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js team for the amazing framework
- TypeScript team for the type safety
- All contributors who help improve this game
