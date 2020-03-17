import React from 'react';
import Chessboard from 'chessboardjsx'
import {connect, ConnectedProps} from 'react-redux'
import { NEXT_QUESTION } from './actions';
import { RootState } from '../reducers';

const mapState = (state: RootState) => {
  return {
    question: state.quiz.questions[state.quiz.currentQuestionNumber],
    questionCount: state.quiz.questions.length,
    questionNumber: state.quiz.currentQuestionNumber + 1
  }
}

const mapDispatch = {
  //refactor to take in the action from elsewhere.
  nextQuestion: () => ({type: NEXT_QUESTION})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const Quiz: React.FC<PropsFromRedux> = (props) => 
    <div>
      <h1>{props.questionNumber}/{props.questionCount}</h1>
      <h1>What kind of mate is this?</h1>
      <Chessboard position={props.question.position} draggable={false}
      />
      <ul>
        <li>
  <button>{props.question.mateType}</button>
        </li>
      </ul>
      <button onClick={props.nextQuestion}>Next Question</button>
    </div>

export default connector(Quiz)