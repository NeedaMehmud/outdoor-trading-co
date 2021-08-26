import "../style/SignIn.css";
import React from "react";



function Login() {
    return (
        <div class="login">
            <div class="login-triangle"></div>
            <form class="login-container">
                <div class="m-1">
                    <label for="exampleFormControlInput1" class="form-label">
                        <b class="text-white">Username</b>
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="m-1">
                    <label for="exampleFormControlInput2" class="form-label">
                        <b class="text-white">Password</b>
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Password" />
                </div>
                <div>
                    <button type="submit" class="signin-button">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;