import React from 'react';
import './App.css';
import mate from './images/mates/anastasias-mate.png'

const App: React.FC = () => {
  return (
    <div>
      <img src={mate} alt="mating pattern"/>
      <button>Anastasia's Mate</button>
      <button>Boson's Mate</button>
    </div>

  );
}

export default App;
