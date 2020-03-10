import React from "react";
import { Colour } from "./domain/Colour";
import { PieceType } from "./domain/PieceType";

import whitePawn from './images/pieces/White-Pawn.png'
import whiteKnight from './images/pieces/White-Knight.png'
import whiteBishop from './images/pieces/White-Bishop.png'
import whiteRook from './images/pieces/White-Rook.png'
import whiteQueen from './images/pieces/White-Queen.png'
import whiteKing from './images/pieces/White-King.png'
import blackPawn from './images/pieces/Black-Pawn.png'
import blackKnight from './images/pieces/Black-Knight.png'
import blackBishop from './images/pieces/Black-Bishop.png'
import blackRook from './images/pieces/Black-Rook.png'
import blackQueen from './images/pieces/Black-Queen.png'
import blackKing from './images/pieces/Black-King.png'

import './Piece.css'

export interface PieceProps {
  colour: Colour
  pieceType: PieceType
};

const getPieceDescription = (piece: PieceProps) => {
  const colourText = piece.colour === Colour.WHITE ? 'white' : 'black'
  const pieceTypeText = piece.pieceType === PieceType.PAWN ? 'pawn':
  piece.pieceType === PieceType.KNIGHT ? 'knight':
  piece.pieceType === PieceType.BISHOP ? 'bishop':
  piece.pieceType === PieceType.ROOK ? 'rook':
  piece.pieceType === PieceType.QUEEN ? 'queen':
  piece.pieceType === PieceType.KING ? 'king':
  "unknown" 

  return `${colourText} ${pieceTypeText}`
}

const getPieceSource = (piece: PieceProps): string => {
  if(piece.colour === Colour.WHITE){
    if(piece.pieceType === PieceType.PAWN){
      return whitePawn
    }
    if(piece.pieceType === PieceType.KNIGHT){
      return whiteKnight
    }
    
    if(piece.pieceType === PieceType.BISHOP){
      return whiteBishop
    }
    if(piece.pieceType === PieceType.ROOK){
      return whiteRook
    }
    if(piece.pieceType === PieceType.QUEEN){
      return whiteQueen
    }
    if(piece.pieceType === PieceType.KING){
      return whiteKing
    }
  }
  if(piece.colour === Colour.BLACK){
    if(piece.pieceType === PieceType.PAWN){
      return blackPawn
    }
    if(piece.pieceType === PieceType.KNIGHT){
      return blackKnight
    }
    
    if(piece.pieceType === PieceType.BISHOP){
      return blackBishop
    }
    if(piece.pieceType === PieceType.ROOK){
      return blackRook
    }
    if(piece.pieceType === PieceType.QUEEN){
      return blackQueen
    }
    if(piece.pieceType === PieceType.KING){
      return blackKing
    }
  }
  return '';
}
export const Piece: React.FC<PieceProps> = (piece) => <div className='piece'>
  <img src={getPieceSource(piece)} alt={getPieceDescription(piece)}/>
</div>;
