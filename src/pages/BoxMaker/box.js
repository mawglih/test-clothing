const Box = ({
  height,
  width,
  backgroundColor,
  id,
  handleClick,
}) => {
  return (
    <div>
      <div
        style = {{
          height:`${height}em`,
          width: `${width}em`,
          backgroundColor: `${backgroundColor}`,
        }}
        id = {id}
      ></div>
      <button onClick={handleClick}>X</button>
    </div>

  )
}
export default Box;
