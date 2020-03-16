import { BoardState, Rank, File } from "../BoardState"
import { Colour } from "../Colour"
import { PieceType } from "../PieceType"

export const StandardBoardState = {}

export const PawnOnD5: BoardState = {
  pieces: [
    {file: File.D,
    rank: Rank.FIVE,
  piece: {
    colour: Colour.WHITE,
    type: PieceType.PAWN
  }}
  ]
}

export const AnastasiasMate: BoardState = {
  pieces: [
    {
    file: File.E,
    rank: Rank.SEVEN,
    piece: {colour: Colour.WHITE, type: PieceType.KNIGHT}
  },
    {
    file: File.G,
    rank: Rank.SEVEN,
    piece: {colour: Colour.BLACK, type: PieceType.PAWN}
  },
    {
    file: File.H,
    rank: Rank.SEVEN,
    piece: {colour: Colour.BLACK, type: PieceType.KING}
  },
    {
    file: File.H,
    rank: Rank.FIVE,
    piece: {colour: Colour.WHITE, type: PieceType.ROOK}
  },
]
}