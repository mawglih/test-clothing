import './jokes.scss';

const Joke = ({
  text,
  vote
}) => {
  return (
    <div>
      <h2>{text}</h2>
      <h4>{vote}</h4>
    </div>
  )
}

export default Joke;