import React from 'react'

interface Props {
  value: string
}

export const Heading1: React.FC<Props> = ({ value }) => <h1>{value}</h1>
export const Heading2: React.FC<Props> = ({ value }) => <h2>{value}</h2>
export const Heading3: React.FC<Props> = ({ value }) => <h3>{value}</h3>

export default {
  Heading1,
  Heading2,
  Heading3,
}
