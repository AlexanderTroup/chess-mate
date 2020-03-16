import React from 'react';
import './App.css';
import Board from './Board/Board'

const App: React.FC = () => {
  return (
    <div>
      <h1>x/x</h1>
      <h1>What kind of mate is this?</h1>
      <Board/>
      <ul>
        <li>
          <button>Anastasia's mate</button>
        </li>
        <li>

        <button>Boden's mate</button>
        </li>
        <li>
          <button>Morphy's Opera mate
            </button></li>
      </ul>
    </div>

  );
}

export default App;
