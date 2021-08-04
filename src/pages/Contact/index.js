import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [values, setValue] = useState({});
  const onChange = e => {
    const { name, value } = e.target;
    setValue(prev => ({...prev, [name]: value}));
  }
  return (<div>
      <form>
        <label>username
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={onChange}
            required
            id="username-input"
          />
        </label>
        <label>password
          <input
            name="password"
            type="text"
            value={values.username}
            onChange={onChange}
            required
            id="password-input"
          />
        </label>
        <button id="login-button" type="submit">Submit</button>
      </form>
  </div>);
}