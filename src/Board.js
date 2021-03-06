import React from 'react'

import Square from './Square'

class Board extends React.Component {
  renderSquare (i, className) {
    return <Square 
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
              key={i}
              className={className}
           />
  }

  renderRows () {
    let rows = []
    let index = 0
    for (let i = 0; i < 3; i++) {
      let squares = []
      for (const m = index + 3; index < m; index++) {
        let className = this.props.winCombination && this.props.winCombination.includes(index) ? 'square-win' : null
        squares.push(this.renderSquare(index, className))
      }
    rows.push(<div key={i} className="board-row"><div className="index index_ver">{i+1}</div>{squares}</div>)
    }
    return rows
  }

  render () {
    return (
      <div>
        {this.renderRows()}
        <div className="board-row_index">
          <div className="index">A</div>
          <div className="index">B</div>
          <div className="index">C</div>
        </div>
      </div>
    )
  }
}

export default Board
