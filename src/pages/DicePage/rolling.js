const Rolling = ({
  text,
  onclick,
  rolling,
}) => {
  console.log('loading in button', rolling)
  return (
    <>
      <button
        className="dice-button"
        onClick={onclick}
        disabled={rolling}
      >
        {text}
      </button>
    </>
  )
}

export default Rolling;