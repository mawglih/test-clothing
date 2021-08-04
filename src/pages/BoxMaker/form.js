import { useState } from 'react';
import './box.scss';

const Form = ({
  submitResult,
}) => {
  const [formData, setFormData] = useState({height:'', width:'',color:''});
  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = e => {
    e.preventDefault();
    const newBox = {...formData, id: Math.floor(Math.random()*1000000)}
    submitResult(newBox);
    resetForm(e);
  }
  const resetForm = (e) => {
    setFormData({height:'', width:'',color:''})
  }
  return (
    <div className="singleBox">
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">
          <input id="height" name="height" value={formData.height} onChange={handleChange}/>
        </label>
        <label htmlFor="width">
          <input id="width" name="width" value={formData.width} onChange={handleChange}/>
        </label>
        <label htmlFor="color">
          <input id="color" name="color" value={formData.color} onChange={handleChange}/>
        </label>
        <button>Add a new box</button>
      </form>
    </div>
  )
}
export default Form;
