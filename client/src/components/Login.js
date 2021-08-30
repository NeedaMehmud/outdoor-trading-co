import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    })
  };


  return (
    <form>
      <div className="login">
        <div className="login-triangle"></div>
        {data ? (
          <p>
            Success!
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="login-container">
            <div className="m-1">
              <label for="exampleFormControlInput1" className="form-label">
                <b className="text-white">Email</b>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="m-1">
              <label for="exampleFormControlInput2" className="form-label">
                <b className="text-white">Password</b>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Password"
                value={formState.password}
              />
            </div>
            <button
              type="submit"
              className="text-center rounded signin-button search-btn"
            >
              Sign In
            </button>
            <button
              className="text-center rounded signin-button search-btn"
            >
              Cancel
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </form>
  );
};

export default Login;
