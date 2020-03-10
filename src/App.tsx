import React from 'react';
import './App.css';
import mate from './images/mates/anastasias-mate.png'
import Board from './components/Board/Board'

const App: React.FC = () => {
  return (
    <div>
      <h1>What kind of mate is this?</h1>
      <Board/>
      <ul>
        <li>Anastasia's mate</li>
        <li>'s mate</li>
        <li>Anastasia's mate</li>
      </ul>
      
    </div>

  );
}

export default App;
