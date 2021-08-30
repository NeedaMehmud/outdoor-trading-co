import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../style/Signup.css";

const SignUpForm = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <div className="container p-3">
        {data ? (
            <p>
              Account creation successful!
            </p>
          ) : (
        <form onSubmit={handleFormSubmit}>
            <div className="form-control my-2 p-3">
              <h2 className="text-center">Preparing for your next adventure?</h2>
              <br></br>
              <h2 className="text-center">Create an account with us to get started!</h2>
                <label> Username</label>
                <input type="text" className="form-control my-2" placeholder="Username" name="username" value={formState.name} onChange={handleChange} />
                <label>Email address</label>
                <input type="email" className="form-control my-2" placeholder="Enter email" name="email" value={formState.email} onChange={handleChange}/>
              <label>Password</label>
              <input type="password" className="form-control my-2" placeholder="Enter password" name="password" value={formState.password} onChange={handleChange}/>
            </div>
            <br></br>
            <div className="form-group p-3">
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>
            <p className="forgot-password text-right">
                <h5>Already registered? <a href="#">Log In</a></h5>
            </p>
        </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
          </div>

    );
};

export default SignUpForm;
