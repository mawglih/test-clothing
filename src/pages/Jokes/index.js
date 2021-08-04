import LeftPane from './leftPAne';
import JokeList from './jokeList';
import './jokes.scss';
const Jokes = () => {
  return (
    <div className="container-jokes">
      <div className="jokes-content">
        <LeftPane />
        <JokeList />
      </div>
    </div>
  )
}
export default Jokes
