import React from 'react';
import './App.css';
import Board from './Board/Board'
import {connect, ConnectedProps} from 'react-redux'
import { MarkClickedState, MARK_CLICKED } from '../types';

interface RootState {
  markClicked: MarkClickedState
}

const mapState = (state: RootState) => {
  console.log('==========STATE==========================');
  console.log(state);
  console.log('====================================');
  
  return {
    clicked: state.markClicked.clicked
  }
}

const mapDispatch = {
  toggleClicked: () => ({type: MARK_CLICKED})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const App: React.FC<PropsFromRedux> = (props) => {
  return (
    <div>
      <h1>x/x</h1>
      <h1>What kind of mate is this?</h1>
      Clicked: {props.clicked.toString()}
      <Board/>
      <ul>
        <button onClick={props.toggleClicked}>Click ME!</button>
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

export default connector(App);
