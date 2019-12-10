import React from 'react'
import { Piece } from './domain/Piece'
import { Colour } from './domain/Colour'
import './Square.css';

interface Props {
  colour: Colour,
  piece?: Piece 
}

const Square: React.FC<Props> = ({colour, piece}) => (
<div className='black square'>
  {colour}
  {piece ? piece.type : ""}
</div>) 

export default Square