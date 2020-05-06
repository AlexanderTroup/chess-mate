import React from 'react'
import Chessboard from 'chessboardjsx'
// import { RootState } from '../reducers'

// const mapState = (state: RootState) => ({
//   //position: state.examples.currentPosition
// })

// const mapDispatch = {
//   previous: () => ({ type: PREVIOUS_EXAMPLE }),
//   next: () => ({ type: NEXT_EXAMPLE }),
// }

const MateExamples: React.FC = () => (
  <div>
    <h1>Checkmate type examples</h1>
    <h2>Mate name here</h2>
    <Chessboard draggable={false} />
    <button type="button">Previous</button>
    <button type="button">Next</button>
  </div>
)

export default MateExamples
