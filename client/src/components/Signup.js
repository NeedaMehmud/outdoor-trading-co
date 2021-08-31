import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
// importing needed libraries and files

const SignUp = () => {
  // set state to empty strings
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    // ready mutation ADD_USER
    const [addUser, { error, data }] = useMutation(ADD_USER);
    // update form state as input fields changed
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    // on submit prevent default
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // await addUser mutation with updated form state
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
        // assign token with auth
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  // if data, return success, else return sign up form
    return (
        <div>
        {data ? (
            <p>
              Successful Login!
            </p>
          ) : (
        <form onSubmit={handleFormSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username" value={formState.name} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" value={formState.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" value={formState.password} onChange={handleChange}/>
            </div>
            <br></br>
            <button type="submit" className="login-btn">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
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

export default SignUp;
