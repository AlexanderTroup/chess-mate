
// action types

import { Piece } from 'chessboardjsx'

export const VALIDATE_ANSWER = 'VALIDATE_ANSWER'
export const MOVE_PIECE = 'MOVE_PIECE'

type MoveDetails = {
  sourceSquare: any,
  targetSquare: any,
  piece: Piece,
}

// action creators

export const movePiece = ({ sourceSquare, targetSquare, piece }: MoveDetails) => ({
  type: MOVE_PIECE,
  sourceSquare,
  targetSquare,
  piece,
})

// actions
interface ValidateAnswerAction {
  type: typeof VALIDATE_ANSWER
}

export interface MovePieceAction {
  type: typeof MOVE_PIECE
  sourceSquare: any,
  targetSquare: any
  piece: Piece
}

export type ActionTypes = ValidateAnswerAction | MovePieceAction
