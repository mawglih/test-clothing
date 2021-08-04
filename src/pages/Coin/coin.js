import { Component } from 'react';
import './coin.scss';
import Tail from '../../images/tail.png';
import Head from '../../images/head.png';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipsTotal: 0,
      headsCount: 0,
      tailsCount: 0,
      image:{},
    }
  }
  handleClick = () => {
    let r = Math.floor(Math.random()*2);
    console.log('r', r);
    if(r === 0) {
      this.setState(curState => {
        return {
          flipsTotal: curState.flipsTotal + 1,
          headsCount: curState.headsCount + 1,
          image: Head,
        };
      });
    } else {
      this.setState(curState => {
        return {
          flipsTotal: curState.flipsTotal + 1,
          tailsCount: curState.tailsCount + 1,
          image: Tail,
        };
      });
    }
  }
  render() {
    const { title } = this.props;
    const {
      flipsTotal,
      headsCount,
      tailsCount,
      image,
    } = this.state;
    return (
      <div className="container">
        <h1>{title}</h1>
        <div>
          {flipsTotal ? <img src={image}/> : null}
        </div>
        <div>
          <button onClick={this.handleClick}>Flip</button>
          </div>
        <p>{`Out of ${flipsTotal} flips there has been ${headsCount} heads and ${tailsCount} tails`}</p>
      </div>
    )
  }
}
Coin.defaultProps = {
  title: 'Let\'s flip a coin'
}
export default Coin;
