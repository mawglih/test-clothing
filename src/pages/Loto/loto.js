import { Component } from 'react';
import Ball from './ball';
import './ball.scss';


class Loto extends Component {

  constructor(props) {
    super(props);
    this.state = {nums: [...Array(6)]};
  }
  componentDidMount() {
    this.generate();
  }
  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(r => Math.floor(Math.random() * 40) + 1)
    }));
  }
  handleClick = () => {
    this.setState({nums: [...Array(6)]});
    this.generate();
  }
  // generatedBalls = () => {
  //   const balls = this.generate();
  //   console.log('balls in f', balls)
  //   return balls.map(i => <Ball key={i} num={i}/>);
  // }
  render() {
    console.log('nums', this.state.nums);
    console.log('bals', this.props.maxBalls);
    const { title='Lottery', maxBalls, maxNum} = this.props;
    return (
      <div className="lottery">
        <h1>{title}</h1>
        <div className="loto">
          {this.state.nums.map(n => <Ball key={Math.random()*100} num={n}/>)}    
        </div>
      <button className="generatebtn" onClick={this.generate}>Generate</button>
      </div>
    )
  }
}
Loto.defaultProps = {
  title: 'Lottery',
  maxBalls: 6,
  maxNum: 40,
}

export default Loto;
