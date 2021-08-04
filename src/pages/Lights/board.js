import { Component } from 'react';
import Cell from './call';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { lights: false, board: this.createBoard(5,5), rand: Math.floor(Math.random()*16), nrows: 5, ncols: 5, hasWon: false}
  }
  clicked = (e) => {
    const {id} = e.target

  }
  createBoard = (w,h) => {
    const board = [];
    for (let i = 0; i < h; i++) {
      let row = [];
      for (let j = 0; j < w; j++) {
        (Math.random() < .25) ? row.push(false) : row.push(true);
      }
      board.push(row);
    }
    console.log('board', board)
    return board;
  }
  flipCell = (y, x, nc, nr, board) => {
    if(x >= 0 && x < nc && y >= 0 && y < nr) {
      board[y][x] = !board[y][x];
    }
    return board;
  }
  flipCellsAround = coord => {
    const { ncols, nrows, board, hasWon} = this.state;
    let newBoard = board;
    const [ y,x ] = coord.split('-').map(Number);
    newBoard = this.flipCell(y, x, ncols, nrows, newBoard);
    newBoard = this.flipCell(y, x-1, ncols, nrows, newBoard);
    newBoard = this.flipCell(y, x+1, ncols, nrows, newBoard);
    newBoard = this.flipCell(y-1, x, ncols, nrows, newBoard);
    newBoard = this.flipCell(y+1, x, ncols, nrows, newBoard);
    let won = newBoard.every(row => row.every(cell => !cell));
    console.log("newBoard", newBoard)
    this.setState({board: newBoard, hasWon: won});
  }
  render() {
    const {lights, board, rand, nrows, ncols} = this.state;
    const tableBoard = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        let coord = `${i}-${j}`
        row.push(<Cell key={coord} classname={board[i][j]} handleClick={() => this.flipCellsAround(coord)}/>);
      }
      tableBoard.push(<tr key={i}>{row}</tr>)
    }
   
    return (
      <div className="board">
        <table>
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
      
    )
  }
}
export default Board;
