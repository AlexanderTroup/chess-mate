import {getPieceForSquare} from './Board';
import { BoardState, Rank, File } from '../../domain/BoardState';
import { Piece } from '../../domain/Piece';
import { Colour } from '../../domain/Colour';
import { PieceType } from '../../domain/PieceType';

describe('Board', () => {
  describe('getPieceForCoordinates', () => {
    it('should return null for an empty square', () => {
      const boardState = {
        pieces: []
      } as BoardState
      const actual = getPieceForSquare(boardState, Rank.ONE, File.A)

      expect(actual).toBeNull()
    });

    it('should return piece for an occupied square', () => {
      const targetPiece = {
        colour: Colour.BLACK,
        type: PieceType.KNIGHT
      } as Piece

      const targetRank = Rank.ONE
      const targetFile = File.A

      const boardState = {
        pieces: [{piece: targetPiece, rank: targetRank, file: targetFile }]
      }
      const expected = targetPiece

      const actual = getPieceForSquare(boardState, targetRank, targetFile)

      expect(actual).toEqual(expected)
    });
  })
})
