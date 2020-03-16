export const MARK_CLICKED = 'MARK_CLICKED'

interface MarkClickedAction {
  type: typeof MARK_CLICKED
}

export interface MarkClickedState {
  clicked: boolean
}

// this should be made more granular to involve just markclickedaction.
export type ActionTypes = MarkClickedAction