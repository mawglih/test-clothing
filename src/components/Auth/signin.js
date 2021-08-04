import { useState } from 'react';
import TextInput from '../CustomInputs/textInput';
import './auth.scss';

const SignIn = ({
  sendCred,
}) => {
  const [data, setData] = useState({});
  const handleChange = e => setData(prevState => {
    return {
      ...prevState, [e.target.name]: e.target.value
    }});
  const handleSubmit = e => {
    e.preventDefault();
    console.log('data', data);
    sendCred(data);
    setData({email:'', password:''});
  }
  return (
    <div className="sign-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <legend>SignIn into existent account</legend>
        <TextInput
          handleChange={handleChange}
          label="Email"
          fieldName="email"
          value={data.email}
          placeHolder="Enter your email"
          type="text"
        />
        <TextInput
          handleChange={handleChange}
          label="Password"
          fieldName="password"
          value={data.password}
          placeHolder="Enter your password"
          type="password"
        />
        {/* <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange} 
            type="text"
            value-={data.email}
            name="email"
          />
        </div> */}
        {/* <div className="input-field">
          <label htmlFor="password">Email</label>
          <input
            onChange={handleChange} 
            type="password"
            value-={data.password}
            name="password"
          />
        </div> */}
        <div>
          <button type="submit">Submit</button>
          <button type="button">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
