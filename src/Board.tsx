import React from "react"
import Square from "./Square"
import { SquareColour, Colour } from "./domain/Colour"
import _ from "lodash"
import "./Board.css"
import { PieceType } from "./domain/PieceType"
import { Piece } from "./Piece"


const getPieceForCoordinates = (x: number, y: number) => {
  const pieceColour = (y < 4) ? Colour.WHITE : Colour.BLACK;


  if (y > 1 && y < 6) {return null}
  if (y === 1 || y === 6) {return <Piece colour={pieceColour} pieceType={PieceType.PAWN}/>}

  const getPieceTypeForFile = (x: number): PieceType => {
    if(x === 0 || x === 7){return PieceType.ROOK}
    if(x === 1 || x === 6){return PieceType.KNIGHT}
    if(x === 2 || x === 5){return PieceType.BISHOP}
    if(x === 3){return PieceType.QUEEN}
    if(x === 4){return PieceType.KING}
    throw new Error(`File number (${x}) does not have an associated piece type.`)
  }
  return <Piece colour={pieceColour} pieceType={getPieceTypeForFile(x)}/>
  
} 
 

const Board: React.FC = () => <div className="board">
  {
    _.range(8).map(y => 
      _.range(8).map(x => 
      <Square type={ (x+y)%2 === 0 ?  SquareColour.LIGHT : SquareColour.DARK }>
        {getPieceForCoordinates(x, y)}
      </Square>
    )  
    ) 
  }
</div>

export default Board