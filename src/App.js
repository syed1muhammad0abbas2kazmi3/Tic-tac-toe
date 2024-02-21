// App.js
import React from 'react';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
