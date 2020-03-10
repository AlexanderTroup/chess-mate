import React from "react"
import Square from "../../Square"
import { SquareColour } from "../../domain/Colour"
import _ from "lodash"
import "./Board.css"
import { Piece } from "../../Piece"
import { BoardState, Rank, File } from "../../domain/BoardState"
import { AnastasiasMate } from "../../domain/exampleBoardStates"

export const getPieceForSquare = (board: BoardState, rank: Rank, file: File) => {
 const matchingPieces = board.pieces.filter(piece => piece.rank === rank && piece.file === file)

 return matchingPieces.length > 0 ? matchingPieces[0].piece : null
}

const getPieceForCoordinates = (x: number, y: number) => {
  //not right that board setup is determined here. should be something passed in. 
  // const pieceColour = (y < 4) ? Colour.WHITE : Colour.BLACK;

  // if (y > 1 && y < 6) {return null}
  // if (y === 1 || y === 6) {return <Piece colour={pieceColour} pieceType={PieceType.PAWN}/>}

  // const getPieceTypeForFile = (x: number): PieceType => {
  //   if(x === 0 || x === 7){return PieceType.ROOK}
  //   if(x === 1 || x === 6){return PieceType.KNIGHT}
  //   if(x === 2 || x === 5){return PieceType.BISHOP}
  //   if(x === 3){return PieceType.QUEEN}
  //   if(x === 4){return PieceType.KING}
  //   throw new Error(`File number (${x}) does not have an associated piece type.`)
  // }

  const intToRank = (x: Number): Rank => {
    if (x === 0 ) return Rank.ONE
    if (x === 1 ) return Rank.TWO
    if (x === 2 ) return Rank.THREE
    if (x === 3 ) return Rank.FOUR
    if (x === 4 ) return Rank.FIVE
    if (x === 5 ) return Rank.SIX
    if (x === 6 ) return Rank.SEVEN
    if (x === 7 ) return Rank.EIGHT

    throw new Error(`cannot return rank for number ${x}`)
  }
  const intToFile = (x: Number): File => {
    if (x === 0 ) return File.A
    if (x === 1 ) return File.B
    if (x === 2 ) return File.C
    if (x === 3 ) return File.D
    if (x === 4 ) return File.E
    if (x === 5 ) return File.F
    if (x === 6 ) return File.G
    if (x === 7 ) return File.H

    throw new Error(`cannot return file for number ${x}`) 
  }

  const rank = intToRank(y)
  const file = intToFile(x)
  const piece = getPieceForSquare(AnastasiasMate, rank, file)

  return piece === null ? null : <Piece colour={piece.colour} pieceType={piece.type}/>
} 
 

const Board: React.FC = () => <div className="board">
  {
    _.range(8).map(y => 
      _.range(8).map(x => 
      <Square type={ (x+y)%2 === 0 ?  SquareColour.LIGHT : SquareColour.DARK }>
        {getPieceForCoordinates(x, 7 - y)}
      </Square>
    )  
    ) 
  }
</div>

export default Board