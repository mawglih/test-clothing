import { Component } from 'react';
import axios from 'axios';
import Joke from './joke';
import './jokes.scss';

class JokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }

  async componentDidMount() {
    const newJokes = await this.getJokes()
    this.setState({
      jokes: newJokes
    })
  }

  getJokes = async () => {
    const url = 'https://icanhazdadjoke.com'; 
    const Jokes = []
    for (let i = 0; i < 10; i++) {
      let joke = await axios.get(url, { headers : { Accept:"application/json" } });
      Jokes.push({text: joke.data.joke, votes: 0});
    }
    console.log('Jokes', Jokes)
    return Jokes;
  }
  render() {
    const { jokes } = this.state;
    console.log('state jokes', jokes)
    jokes.forEach(i => {
      console.log('joke is',i);
      return i;
    });
    return(
      <div>
          {this.state.jokes.map(i => (
          <Joke key={Math.random()*10000203000} text={i.text} vote={i.votes}/>
          ))}
      </div>
    )
  }
}
export default JokeList;
