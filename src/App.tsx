import React from 'react';
import './App.css';
import mate from './images/mates/anastasias-mate.png'
import Board from './Board'

const App: React.FC = () => {
  return (
    <div>
      <img src={mate} alt="mating pattern"/>
      <Board/>
    </div>

  );
}

export default App;
