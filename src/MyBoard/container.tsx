import React from 'react'


const assistiveStyle: React.CSSProperties = {
  position: 'absolute',
  margin: '-1px',
  border: '0',
  padding: '0',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
}
const MyBoard: React.FC = () => (
  <div>

    <span aria-live="assertive" style={assistiveStyle} className="assistive-text"> </span>
    <div style={{ backgroundColor: 'blue', width: 100, height: 100 }} />
    <div style={{ backgroundColor: 'red', width: 100, height: 100 }} />
    <div style={{ backgroundColor: 'green', width: 100, height: 100 }} />
  </div>
)

export default MyBoard
