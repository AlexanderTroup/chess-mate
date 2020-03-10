import { Piece } from "./Piece"

export enum Rank {
  ONE = 'First',
  TWO = 'Second',
  THREE = 'Third',
  FOUR = 'Fourth',
  FIVE = 'Fifth',
  SIX = 'Sixth',
  SEVEN = 'Seventh',
  EIGHT = 'Eighth'
}

export enum File {
  A,B,C,D,E,F,G,H
}


type PieceAndSquare = {
  piece: Piece,
  file: File,
  rank: Rank
}

export type BoardState = {
  pieces: PieceAndSquare[]
}
