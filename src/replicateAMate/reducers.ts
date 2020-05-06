import { Position, Piece } from 'chessboardjsx'
import { ReplicateAMate } from './types'
import {
  VALIDATE_ANSWER,
  MOVE_PIECE,
  ActionTypes,
} from './actions'
import mateCheckerFactory from './mateChecker/mateCheckerFactory'
import { MateType } from '../domain/MateType'

const initialState: ReplicateAMate = {
  mateCorrect: false,
  currentPosition: {},
}

const validateAnswer = (state: ReplicateAMate) => {
  console.log('need to stop this being hard coded!!!')
  // const mateChecker = mateCheckerFactory.getMateChecker(MateType.ANASTASIAS_MATE)
  // const mateCorrect = mateChecker.isPositionMate(state.currentPosition)
  return { ...state, mateCorrect: true }
}

const movePiece = (
  state: ReplicateAMate,
  targetSquare: any,
  sourceSquare: any,
  piece: Piece,
) => {
  const position: Position = {
    ...state.currentPosition,
    [targetSquare]: piece,
  }

  if (sourceSquare !== 'spare') {
    delete position[sourceSquare]
  }

  return { ...state, currentPosition: position }
}

export const replicateAMate = (state = initialState, action: ActionTypes): ReplicateAMate => {
  switch (action.type) {
    case VALIDATE_ANSWER:
      return validateAnswer(state)
    case MOVE_PIECE:
      return movePiece(state, action.targetSquare, action.sourceSquare, action.piece)
    default:
      return state
  }
}

export default replicateAMate
