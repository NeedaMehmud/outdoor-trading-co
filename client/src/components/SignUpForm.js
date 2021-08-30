import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
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

    if(Auth.loggedIn()){
      return <Redirect to="/me" />;
    };
    
    return (
      <div className="container p-3">
        {data ? (
            <p>
              Account creation successful!
            </p>
          ) : (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group p-3 text-center">
              <h2>Preparing for your next adventure?</h2>
              <br></br>
              <h2>Create an account with us to get started!</h2>
            </div>
            <div className="form-group p-3">
                <label> Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username" value={formState.name} onChange={handleChange} />
            </div>
            <div className="form-group p-3">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div className="form-group p-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" name="password" value={formState.password} onChange={handleChange}/>
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
