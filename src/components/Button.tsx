import React from 'react'
import './Button.css'

interface Props {
  onClick: () => {},
  value: string
}

const Button: React.FC<Props> = ({ onClick, value }) => <button onClick={onClick} type="button">{value}</button>

export default Button
