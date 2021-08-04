import { useState } from 'react';
import './dice.scss';
import Die from './die';
import Rolling from './rolling';

const Dice = () => {
  const [numState, changeState] = useState([1,1]);
  const [loading, setLoadingState] = useState(false);
  const onChangeDice = e => {
    setLoadingState(true);
    setTimeout(() => {
      const num1 = Math.ceil(Math.random()*6);
      const num2 = Math.ceil(Math.random()*6);
      changeState([ num1, num2]);
      setLoadingState(false);
    }, 2000)
    
  }
  return (
    <div className="dice-container">
      <div className="dice-content">
        <div className="dice">
        <Die number={numState[0]}/>
        <Die number={numState[1]}/>
        </div>
      <div className="rolling-button">
        <Rolling text={loading ? 'Rolling...' : 'Roll the Dice'} rolling={loading} onclick={onChangeDice}/>
      </div>
      </div>
    </div>
  )
};

export default Dice;
