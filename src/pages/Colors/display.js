import { Component } from 'react';
import Square from './square';
import './display.scss';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [],
      boxes: [...Array(18)],
    }
  }
  getRandomColor = () => {
    let r, g, b;
    const arr = [];
    let str='';
    arr.push(r = Math.floor(Math.random()*255));
    arr.push(g = Math.floor(Math.random()*255));
    arr.push(b = Math.floor(Math.random()*255));
    console.log('array: ', arr)
    str=`rgb(${arr.join()})`
    return str;
  }
  componentDidMount() {
    this.setState({
      color: this.getRandomColor()
    })
  }
  render() {
    const {
      color,
      boxes,
    } = this.state;
    return(
      <div className="container2">
        <div className="content2">
          {boxes.map(box => {
          return (
          <Square color={this.getRandomColor()}/>)}
          )}
        </div>
      </div>
    )
  }
}

export default Display;
