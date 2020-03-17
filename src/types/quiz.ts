import { BoardState } from "../domain/BoardState";
import { MateType } from "../domain/MateType";

interface Question {
  board: BoardState
  mateType: MateType
}

export interface Quiz {
  questions: Question[]
  currentQuestionNumber: number
}

