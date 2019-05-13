import React from 'react'
import Board from './Board'

export default class Game extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.state = {
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber: 0,
            winIndex: []

        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1) 
        const current = history[history.length-1]
        const squares = current.squares.slice()
        const calculateResult = this.calculateWinner(squares)
        if (squares[i] || calculateResult.winUser) {
            return
        } 

        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({history: history.concat([{squares: squares}]), 
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            winIndex:calculateResult.winIndex}) 

    }

    jumpTo(move) {
        this.setState({stepNumber: move, xIsNext: (move % 2) === 0})

    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = this.calculateWinner(current.squares)
        let status;
        if (winner.winUser) {
            status = 'Winner is ' + winner.winUser
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start'

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} className={move === this.state.stepNumber ? 'bold' : 'normal'}>{desc}</button>
                </li>
            )
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={this.handleClick}  winIndex={winner.winIndex}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
            </div>
        )
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        let winUser;
        let winIndex = []
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winUser = squares[a]
            winIndex = lines[i]
            break
          }
        }
        return {winUser, winIndex};
      }

}