import { Position } from 'chessboardjsx'
import { MateType } from '../domain/MateType'

interface Question {
  position: Position
  mateType: MateType
}

export interface Quiz {
  questions: Question[]
  currentQuestionNumber: number
}
