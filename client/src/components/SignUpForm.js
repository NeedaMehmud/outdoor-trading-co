import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../style/Signup.css";
import bearImg from "../assets/images/bear-blink.gif";

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
            <div className="walter-says">
              <h2>Preparing for your next adventure?</h2>
              <p>Create an account with us to get started!</p>
            </div>
            <img src={bearImg} className="walter" alt="An illustration of a bear named Walter with a backpack."></img>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control my-2" placeholder="Username" name="username" value={formState.name} onChange={handleChange} />
              <label>Email address</label>
              <input type="email" className="form-control my-2" placeholder="Enter email" name="email" value={formState.email} onChange={handleChange}/>
              <label>Password</label>
              <input type="password" className="form-control my-2" placeholder="Enter password" name="password" value={formState.password} onChange={handleChange}/>
            </div>
            <br></br>
            <div className="form-group">
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>
            <p className="forgot-password text-right my-2">
                <h5>Already registered? <a href="#">Log In</a></h5>
            </p>
            </div>
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
