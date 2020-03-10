import React from 'react'
import { Piece } from './domain/Piece'
import { SquareColour } from './domain/Colour'
import './Square.css';
//import queen from './images/pieces/queen.png'
interface Props {
  type: SquareColour,
  piece?: Piece 
}

const Square: React.FC<Props> = ({type, children}) => (
<div className={type === SquareColour.DARK ? 'square dark' : 'square light'}>
  {children}
</div>) 

export default Square