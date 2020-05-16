import React from 'react'
import Chessboard from 'chessboardjsx'

import { connect, ConnectedProps } from 'react-redux'
import { VALIDATE_ANSWER, movePiece } from './actions'
import { RootState } from '../reducers'
import Button from '../components/Button'
import { Heading3 } from '../components/Headings'

const mapState = (state: RootState) => ({
  position: state.replicateAMate.currentPosition,
  currentAnswerCorrect: state.replicateAMate.mateCorrect,
})

const mapDispatch = {
  validateAnswer: () => ({ type: VALIDATE_ANSWER }),
  onDrop: movePiece,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const ReplicateMateChallenge: React.FC<PropsFromRedux> = ({
  currentAnswerCorrect,
  position,
  validateAnswer,
  onDrop,
}) => (
  <div style={{ margin: '1rem 1rem' }}>
    <Heading3 value="What does a Damiano&apos;s mate look like?" />
    <Chessboard
      sparePieces
      position={position}
      onDrop={(details) => onDrop(details)}
      dropOffBoard="snapback"
      calcWidth={(({ screenWidth }) => Math.min(screenWidth - 20, 600))}
    />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={validateAnswer} value="Like This?" />
    </div>
    {currentAnswerCorrect && <div>Correct!!!</div>}
  </div>
)


export default connector(ReplicateMateChallenge)
