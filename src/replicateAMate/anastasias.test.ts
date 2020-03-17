import { Position } from 'chessboardjsx'
import { isPositionMate } from './anastasias'

describe('Anastasia mate checker', () => {
  describe('isPositionMate', () => {
    // would be interesting to return an array of what's wrong rather than just the one error.
    // check if they've entered a different mate(a job for higher up.
    // assume we're playing white to begin with.
    it('returns false with error for missing kings position', () => {
      const missingKingsPosition: Position = {

      }
      expect(isPositionMate(missingKingsPosition)).toBe(false)
    })

    it('returns true for valid anastasias mate with white', () => {
      const anastasiasMateForWhite: Position = {
        e7: 'wN',
        g7: 'bP',
        h7: 'bK',
        h5: 'wR',
      }
      expect(isPositionMate(anastasiasMateForWhite)).toBe(true)
    })

    it('returns true for valid anastasias mate with black', () => {
      const anastasiasMateForBlack: Position = {
        e7: 'bN',
        g7: 'wP',
        h7: 'wK',
        h5: 'bR',
      }
      expect(isPositionMate(anastasiasMateForBlack)).toBe(true)
    })
  })
})
