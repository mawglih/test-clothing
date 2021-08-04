import { useState } from 'react';
import TextInput from '../CustomInputs/textInput';
import './auth.scss';

const SignUp = ({
  sendCred,
}) => {
  const [data, setData] = useState({});
  const handleChange = e => setData(prevState => {
    return {
      ...prevState, [e.target.name]: e.target.value
    }});
  const handleSubmit = e => {
    e.preventDefault();
    if(data.password === data.password2) {
      sendCred(data);
      console.log('data', data);
      setData({email:'', password:'', username:'', password2:''});
    } else {
      console.log('Password do not match');
    }
  }
  return (
    <div className="sign-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <legend>SignUp for new account</legend>
        <TextInput
          handleChange={handleChange}
          label="Username"
          fieldName="username"
          value={data.username}
          placeHolder="Enter your username"
          type="text"
        />
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
        <TextInput
          handleChange={handleChange}
          label="Re-enter password"
          fieldName="password2"
          value={data.password2}
          placeHolder="Re-enter your password"
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

export default SignUp
