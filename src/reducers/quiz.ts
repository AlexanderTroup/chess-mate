import { Quiz } from "../types/quiz";
import { AnastasiasMate, PawnOnD5 } from "../domain/exampleBoardStates";
import { MateType } from "../domain/MateType";
import { ActionTypes, NEXT_QUESTION } from "../types";

const initialState: Quiz = {
  questions: [{
    position: AnastasiasMate,
    mateType: MateType.ANASTASIAS_MATE
  },
{position: PawnOnD5, mateType: MateType.ANASTASIAS_MATE}],
currentQuestionNumber: 0
}

export const quiz = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return state.currentQuestionNumber + 1 >= state.questions.length ? state : {...state, currentQuestionNumber: state.currentQuestionNumber + 1}
    default:
      return state
  }
}