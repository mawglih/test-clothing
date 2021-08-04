import { Component } from 'react';
import axios from 'axios';
import './deck.scss';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        image: '',
        value: '',
        suit: '',
        code: '',
      }]
    }
  }

  getCards = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/'
    const response = await axios.get(url);
    const { data: { cards } } = response;
    const [ {code, image, suit, value} ] = cards;
    const newCard = {      
      image,
      value,
      suit,
      code,
    }
    return newCard;
  }
  async componentDidMount() {
    const newCard = await this.getCards();
    this.setState({
      cards: [...this.state.cards, newCard]
    })
  }

  drawNewCard = async () => {
    const newCard = await this.getCards();
    this.setState({
      cards: [...this.state.cards, newCard]
    })
  }
  render() {
    const {cards} = this.state;
    console.log('cards', cards)
    return(
      <div className="container">
        <div className='content-deck'>
          <h1>Deck of cards</h1>
          {cards.map(card =>  <img key={card.code} src={card.image}/>)}
        </div>
        <button className="draw-btn" onClick={this.drawNewCard}>Draw again</button>
      </div>
    )
  }
}
export default Deck;
