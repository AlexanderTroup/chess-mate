import { combineReducers } from 'redux'
import { quiz } from '../quiz/reducers'
import { replicateAMate } from '../replicateAMate/reducers'

const rootReducer = combineReducers({
  quiz,
  replicateAMate,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
