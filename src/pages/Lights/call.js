const Cell = ({
  light,
  classname,
  random,
  handleClick,
}) => {
  return (
    <td onClick={handleClick} style={classname ? {backgroundColor:"blue"} : null} className="boardCell"></td>
  )
}
export default Cell;
