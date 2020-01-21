import React from "react"
import Square from "./Square"
import { SquareColour } from "./domain/Colour"
import _ from "lodash"
import "./Board.css"

const Board: React.FC = () => <div className="board">
  {
    _.range(8).map(x => 
      _.range(8).map(y => 
      <Square type={ (x+y)%2 === 0 ?  SquareColour.LIGHT : SquareColour.DARK }/>
    )  
    ) 
  }
</div>

export default Board