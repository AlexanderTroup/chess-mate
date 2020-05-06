
export const NEXT_QUESTION = 'NEXT_QUESTION'

interface NextQuestionAction {
  type: typeof NEXT_QUESTION
}

export const nextQuestionActionCreator = () => ({
  type: NEXT_QUESTION,
})

// this should be made more granular
export type ActionTypes = NextQuestionAction
