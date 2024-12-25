import React, { useState } from 'react';
import './Login.css'
import InputForm from '../components/InputForm'
import { useAuth } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { authToken, login } = useAuth();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9\.]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!]{5,20}$`,
          required: true,
        }
      ];
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        await login(values);
        navigate('/attendance')
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        
      };
    
      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {inputs.map((input) => (
              <InputForm
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Login</button>
          </form>
        </div>
      );
}

export default Login;