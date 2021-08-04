import { Component } from 'react';
import './display.scss';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    }
  }
  getRandomColor = () => {
    let r, g, b;
    const arr = [];
    let str='';
    arr.push(r = Math.floor(Math.random()*255));
    arr.push(g = Math.floor(Math.random()*255));
    arr.push(b = Math.floor(Math.random()*255));
    str=`rgb(${arr.join()})`
    return str;
  }
  handleClick = () => {
    let newColor = this.getRandomColor();
    if(newColor !== this.state.color) {
      this.setState({
        color: newColor
      });
    } else{
      this.handleClick();
    }

  }
  render() {
    return (
      <div 
        className="box" 
        style={{backgroundColor:this.state.color}}
        onClick={this.handleClick}
      ></div>
    )
  }
}

export default Square;