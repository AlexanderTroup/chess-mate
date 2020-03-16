import {ActionTypes, MarkClickedState, MARK_CLICKED} from '../types'

const initialState: MarkClickedState = {
  clicked: false
}

export const markClicked = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case MARK_CLICKED:
      return {clicked: true}
    default:
      return state
  }
}