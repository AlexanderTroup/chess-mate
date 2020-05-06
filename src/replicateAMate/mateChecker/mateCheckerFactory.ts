import { Position } from 'chessboardjsx'
import { MateType } from '../../domain/MateType'

interface MateChecker {
  isPositionMate: (position: Position) => Boolean
}

const anastasiasMateChecker :MateChecker = {
  isPositionMate: (position: Position) => true,
}

const getMateChecker = (mateType: MateType): MateChecker => {
  switch (mateType) {
    case MateType.ANASTASIAS_MATE:
      return anastasiasMateChecker
    default:
      throw new Error(`MateChecker for ${mateType} not implemented`)
  }
}

export default { getMateChecker }
