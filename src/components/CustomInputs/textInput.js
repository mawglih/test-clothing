const TextInput = ({
  handleChange,
  label,
  fieldName,
  value,
  placeHolder,
  classname,
  type,
}) => (
  <div className="input-container">
    {label ? (
    <label
      htmlFor={fieldName}
      className={classname}
    >
      {label}
    </label>
     ) : null}
    <input 
      className="input-field"
      onChange={handleChange}
      placeholder={placeHolder}
      value={value}
      name={fieldName}
      type={type}
    />
  </div>
);

export default TextInput;